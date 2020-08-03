import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

import Loading from "components/Loading";
import { getItemUrlById } from "utils/api";
import humanDate from "utils/humanDate";

export default class Comment extends Component {
	constructor() {
		super();
		this.state = {
			data: {},
			isLoading: true,
		};
	}

	componentDidMount() {
		fetch(getItemUrlById(this.props.commentId))
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					data,
					isLoading: false,
				})
			);
	}

	getChildComments() {
		const childComments = this.state.data.kids || [];

		return childComments;
	}

	render() {
		return (
			<div>
				{this.state.isLoading && <Loading></Loading>}
				{!this.state.isLoading && (
					<div className="comment-card">
						<div className="comment-card__description">
							<div className="comment-card__by">
								by <span> {`${this.state.data.by} `}</span>
							</div>
							<div className="comment-card__time">
								at <span>{humanDate(this.state.data.time)}</span>
							</div>
						</div>
						<div className="comment-card__text">
							{ReactHtmlParser(this.state.data.text)}
						</div>
						<div className="comment-card__child">
							{this.getChildComments().map((comment) => (
								<Comment key={comment} commentId={comment}></Comment>
							))}
						</div>
					</div>
				)}
			</div>
		);
	}
}
