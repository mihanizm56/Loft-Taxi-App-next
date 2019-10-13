import React, { Component, createRef } from "react";
// TODO написать сравнение руками
import { connect } from "react-redux";
import isEqual from "lodash/isEqual";
import {
	getFromCoords,
	getToCoords,
	getCoordsError,
} from "../../redux/modules/addresses";
import { EMPTY_ARRAY } from "../../constants";
import "./styles/index.css";

// eslint-disable-next-line
const mapboxgl = __CLIENT__ ? require("mapbox-gl/dist/mapbox-gl") : {};

const DEFAULT_CONSTANTS = [30.2656504, 59.8029126];

export class MapBox extends Component {
	static getDerivedStateFromProps(nextProps, prevState) {
		return nextProps.arrayOfCoords && nextProps.arrayOfCoords.length
			? { ...prevState, coords: nextProps.arrayOfCoords }
			: { ...prevState, coords: EMPTY_ARRAY };
	}

	constructor() {
		super();

		this.state = {
			coords: [],
		};

		this.map = null;
		this.mapContainer = createRef();
	}

	componentDidMount() {
		console.log(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN);

		mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
		this.initializeMap(DEFAULT_CONSTANTS);
	}

	shouldComponentUpdate(nextProps, nextState) {
		// TODO написать сравнение руками
		return !isEqual(nextState, this.state);
	}

	componentDidUpdate(prevState) {
		// TODO написать сравнение руками
		if (!isEqual(prevState, this.state)) {
			const { coords } = this.state;

			this.addTheLine(coords);
			this.flyToPoint(coords[0]);
		}

		if (!this.state.coords.length) {
			this.removeLayer();
		}
	}

	componentWillUnmount() {
		if (this.map) {
			this.map.remove();
		}
	}

	initializeMap = centerCoords => {
		console.log("mapboxgl.Map", mapboxgl);

		this.map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v9",
			center: centerCoords,
			zoom: 15,
		});
	};

	addTheLine = arrayOfCoords =>
		this.map.addLayer({
			id: "route",
			type: "line",
			source: {
				type: "geojson",
				data: {
					type: "Feature",
					properties: {},
					geometry: {
						type: "LineString",
						coordinates: arrayOfCoords,
					},
				},
			},
			layout: {
				"line-join": "round",
				"line-cap": "round",
			},
			paint: {
				"line-color": "#888",
				"line-width": 8,
			},
		});

	removeLayer = () => {
		this.map.removeLayer("route");
		this.map.removeSource("route");

		if (this.map.getSource("route")) {
			this.map.removeSource("route");
		}
	};

	flyToPoint = coords =>
		this.map.flyTo({
			center: coords,
		});

	render() {
		return <div ref={this.mapContainer} className="map-container" />;
	}
}

const mapStateToProps = store => ({
	fromCoords: getFromCoords(store),
	toCoords: getToCoords(store),
	coordsError: getCoordsError(store),
});

export const MapBoxModule = connect(
	mapStateToProps,
	null
)(MapBox);
