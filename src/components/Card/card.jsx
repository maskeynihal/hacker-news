import React, { Component } from "react";
import humanDate from "utils/humanDate";
import { getTotalComments } from "utils/comments";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";

export default class Card extends Component {
	render() {
		return (
			<div className="card">
				<div className="card__title">
					<Link to={`/${this.props.data.id}`}>{this.props.data.title}</Link>
				</div>
				<div className="card__description"></div>
				<div className="card__footer">
					<span className="card__score">{`${this.props.data.score} point`}</span>
					<span className="card__by">{`${this.props.data.by} `}</span>
					<span className="card__time">{humanDate(this.props.data.time)}</span>
					<span className="card__comments">
						{getTotalComments(this.props.data.kids) || 0}
					</span>
				</div>
			</div>
		);
	}
}
