import React from "react";
import Button from "@material-ui/core/Button";
import "./index.css";

export class OrderInfoBox extends React.Component {
	state = {
		isOpen: true,
	};

	toggleViewInfoBox = () =>
		this.setState(prevState => ({
			isOpen: !prevState.isOpen,
		}));

	render() {
		const { handleCancelOrder, fromPlace, toPlace, timeToGetTaxi } = this.props;
		const { isOpen } = this.state;

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
				<h5 className="order-info-box__title">Ваш заказ</h5>
				{isOpen && (
					<>
						<div className="info-container-row">
							<div className="info-container-first-col">
								<p className="order-info-box__key">Откуда:&nbsp;</p>
							</div>
							<div className="info-container-second-col">
								<p className="order-info-box__value">{fromPlace}</p>
							</div>
						</div>
						<div className="info-container-row">
							<div className="info-container-first-col">
								<p className="order-info-box__key">Куда:&nbsp;</p>
							</div>
							<div className="info-container-second-col">
								<p className="order-info-box__value">{toPlace}</p>
							</div>
						</div>
						<div className="info-container-row">
							<div className="info-container-first-col">
								<p className="order-info-box__key">
									Время прибытия такси:&nbsp;
								</p>
							</div>
							<div className="info-container-second-col">
								<p className="order-info-box__value">{timeToGetTaxi}</p>
							</div>
						</div>
					</>
				)}

				<div className="order-info-box__button">
					<Button
						variant="outlined"
						color="primary"
						onClick={handleCancelOrder}
					>
						Отменить заказ
					</Button>
				</div>
			</div>
		);
	}
}
