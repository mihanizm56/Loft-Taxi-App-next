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
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const DEFAULT_CONSTANTS = [30.2656504, 59.8029126];

export class MapBox extends Component {
	static getDerivedStateFromProps(nextProps) {
		const { fromCoords, toCoords, coordsError } = nextProps;

		return fromCoords.length && toCoords.length && !coordsError
			? { coordsToStart: fromCoords, coordsToFinish: toCoords }
			: { coordsToStart: EMPTY_ARRAY, coordsToFinish: EMPTY_ARRAY };
	}

	constructor() {
		super();

		this.state = {
			coordsToStart: EMPTY_ARRAY,
			coordsToFinish: EMPTY_ARRAY,
		};

		this.map = null;
		this.mapContainer = createRef();
	}

	componentDidMount() {
		this.initializeMap(DEFAULT_CONSTANTS);
	}

	shouldComponentUpdate(nextProps, nextState) {
		// TODO написать сравнение руками
		return !isEqual(nextState, this.state);
	}

	componentDidUpdate(prevState) {
		console.log("UPDATED MAPBOX", this.state);

		// TODO написать сравнение руками
		const { coordsToStart, coordsToFinish } = this.state;

		if (!coordsToStart.length || !coordsToFinish.length) {
			this.removeLayer();
			return;
		}

		if (!isEqual(prevState, this.state)) {
			this.addTheLine([coordsToStart, coordsToFinish]);
			this.flyToPoint(coordsToFinish);
		}
	}

	componentWillUnmount() {
		if (this.map) {
			this.map.remove();
		}
	}

	initializeMap = centerCoords => {
		this.map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v9",
			center: centerCoords,
			zoom: 15,
		});
	};

	addTheLine = coordinates =>
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
						coordinates,
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
		if (this.map) {
			this.map.removeLayer("route");
			this.map.removeSource("route");

			if (this.map.getSource("route")) {
				this.map.removeSource("route");
			}
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
