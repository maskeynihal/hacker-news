import React, { Component } from "react";
import humanDate from "utils/humanDate";

export default class Card extends Component {
	render() {
		return (
			<div className="card">
				<div className="card__title">{this.props.data.title}</div>
				<div className="card__description"></div>
				<div className="card__footer">
					<span className="card__score">{`${this.props.data.score} point`}</span>
					<span className="card__by">{`${this.props.data.by} `}</span>
					<span className="card__time">{humanDate(this.props.data.time)}</span>
				</div>
			</div>
		);
	}
}
