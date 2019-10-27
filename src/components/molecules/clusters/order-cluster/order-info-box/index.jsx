import React from "react";
import Button from "@material-ui/core/Button";
import { withTranslation } from "../../../../../../i18n";
import { lockTimeMessage } from "../../../../../utils/helpers";
import "./index.css";

export class OrderBox extends React.Component {
	constructor(props) {
		super(props);

		const { timeToGetTaxi } = props;

		this.state = {
			isOpen: true,
			timeToFinishOrder: timeToGetTaxi || 0,
		};
	}

	componentDidMount() {
		const { timeToGetTaxi } = this.props;

		const isTimeOverZero = this.checkTimeIsActive(timeToGetTaxi);

		if (isTimeOverZero) {
			this.interval = setInterval(() => {
				this.setState(previousState => ({
					timeToFinishOrder: previousState.timeToFinishOrder - 1,
				}));
			}, 1000);
		}
	}

	componentDidUpdate() {
		const { timeToFinishOrder } = this.state;

		const isTimeOverZero = this.checkTimeIsActive(timeToFinishOrder);

		if (!isTimeOverZero) {
			clearInterval(this.interval);
		}
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	checkTimeIsActive = time => Boolean(time !== 0 && time > 0);

	toggleViewInfoBox = () =>
		this.setState(prevState => ({
			isOpen: !prevState.isOpen,
		}));

	render() {
		const { handleCancelOrder, fromPlace, toPlace, t: translate } = this.props;
		const { isOpen, timeToFinishOrder } = this.state;
		const parsedTimeValue = lockTimeMessage({
			seconds: timeToFinishOrder,
			i18n: translate,
		});

		return (
			<div className="order-info-box">
				<div className="toggle-view">
					<button
						className="toggle-view__button"
						type="button"
						onClick={this.toggleViewInfoBox}
					>
						{isOpen ? `Свернуть` : `Показать`}
					</button>
				</div>
				<h5 className="order-info-box__title">{translate("your-order")}</h5>
				{isOpen && (
					<>
						<div className="info-container-row">
							<div className="info-container-first-col">
								<p className="order-info-box__key">{translate("from")}</p>
							</div>
							<div className="info-container-second-col">
								<p className="order-info-box__value">{fromPlace}</p>
							</div>
						</div>
						<div className="info-container-row">
							<div className="info-container-first-col">
								<p className="order-info-box__key">{translate("to")}</p>
							</div>
							<div className="info-container-second-col">
								<p className="order-info-box__value">{toPlace}</p>
							</div>
						</div>
						<div className="info-container-row">
							<div className="info-container-first-col">
								<p className="order-info-box__key">
									{translate("time-to-arrive")}
								</p>
							</div>
							<div className="info-container-second-col">
								<p className="order-info-box__value">{parsedTimeValue}</p>
							</div>
						</div>
					</>
				)}
				<div className="order-info-box__button">
					<Button
						variant="outlined"
						color="primary"
						onClick={handleCancelOrder}
						disabled={Boolean(timeToFinishOrder)}
					>
						{translate("cancel-order")}
					</Button>
				</div>
			</div>
		);
	}
}

export const OrderInfoBox = withTranslation("order-info-box")(OrderBox);
