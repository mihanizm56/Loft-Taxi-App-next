import React, { Component, createRef } from "react";
// TODO написать сравнение руками
import { connect } from "react-redux";
import isEqual from "lodash/isEqual";
import {
	getFromCoords,
	getToCoords,
	getCoordsError,
} from "../../redux/modules/addresses";
import { getOrderIsDoneStatus } from "../../redux/modules/orders";
import "./styles/index.css";

// eslint-disable-next-line
const mapboxgl = __CLIENT__ ? require("mapbox-gl/dist/mapbox-gl") : {};
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const DEFAULT_CONSTANTS = [30.2656504, 59.8029126];

export class MapBox extends Component {
	static getDerivedStateFromProps(nextProps) {
		const { fromCoords, toCoords, coordsError, orderIsDone } = nextProps;
		console.log(
			"getDerivedStateFromProps nextProps in MapBox",
			Boolean(orderIsDone || coordsError)
		);

		return orderIsDone || coordsError
			? { coordsToStart: {}, coordsToFinish: {} }
			: { coordsToStart: fromCoords, coordsToFinish: toCoords };
	}

	constructor() {
		super();

		this.state = {
			coordsToStart: {},
			coordsToFinish: {},
		};

		this.map = null;
		this.mapContainer = createRef();
	}

	componentDidMount() {
		const { coordsToStart, coordsToFinish } = this.state;
		console.log("state in mapbox", this.state);
		this.initializeMap(DEFAULT_CONSTANTS);

		if (
			Boolean(Object.keys(coordsToStart).length) &&
			Boolean(Object.keys(coordsToFinish).length)
		) {
			this.map.on("load", () => {
				this.addTheLine([
					[coordsToStart.lng, coordsToStart.lat],
					[coordsToFinish.lng, coordsToFinish.lat],
				]);
				this.flyToPoint(coordsToFinish);
			});
		}
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	// console.log(
	// 	// 	"props in shouldComponentUpdate",
	// 	// 	nextState,
	// 	// 	this.state
	// 	// );
	// 	// TODO написать сравнение руками
	// 	return !isEqual(nextState, this.state);
	// }

	componentDidUpdate(prevProps, prevState) {
		// TODO написать сравнение руками
		const { coordsToStart, coordsToFinish } = this.state;
		const { orderIsDone, coordsError } = this.props;

		console.log("UPDATED MAPBOX", this.state, this.props);

		if (orderIsDone || coordsError) {
			this.removeLayer();
		} else if (!isEqual(prevState, this.state)) {
			this.addTheLine([
				[coordsToStart.lng, coordsToStart.lat],
				[coordsToFinish.lng, coordsToFinish.lat],
			]);
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
		console.log("addTheLine coordinates", coordinates) ||
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
		const { map } = this;

		// map.removeSource("route");
		if (map.getLayer("route")) {
			map.removeLayer("route");
		}

		if (map.getSource("route")) {
			map.removeSource("route");
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
	orderIsDone: getOrderIsDoneStatus(store),
	fromCoords: getFromCoords(store),
	toCoords: getToCoords(store),
	coordsError: getCoordsError(store),
});

export const MapBoxModule = connect(
	mapStateToProps,
	null
)(MapBox);
