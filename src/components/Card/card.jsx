import React, { Component } from "react";
import humanDate from "utils/humanDate";
import { getTotalComments } from "utils/comments";

import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import CommentIcon from "@material-ui/icons/Comment";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import { IconButton } from "components/Button";
export default class Card extends Component {
	render() {
		return (
			<div className="card">
				<div className="card__title">
					<Link to={`/${this.props.data.id}`}>{this.props.data.title}</Link>
				</div>
				<div className="card__description"></div>
				<div className="card__footer">
					<div className="card__score">{`${this.props.data.score} point`}</div>
					<div className="card__by">
						{" "}
						<IconButton text={this.props.data.by}>
							<PersonIcon></PersonIcon>
						</IconButton>
					</div>
					<div className="card__time">
						<IconButton text={humanDate(this.props.data.time)}>
							<AccessTimeIcon></AccessTimeIcon>
						</IconButton>
					</div>
					<div className="card__comments">
						<IconButton text={getTotalComments(this.props.data.kids) || 0}>
							<CommentIcon></CommentIcon>
						</IconButton>
					</div>
				</div>
			</div>
		);
	}
}
