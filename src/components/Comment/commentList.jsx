import React, { Component } from "react";
import Comment from "./comment";

export default class CommentList extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		this.paginateComments();
	}

	paginateComments() {
		return this.props.comments;
	}

	render() {
		return (
			<div className="comment-list">
				<div className="comment-list__heading">Comments</div>

				<div className="comment-list__comment-container">
					{this.paginateComments().map((comment) => (
						<div className="comment-list__comment">
							<Comment key={comment} commentId={comment}></Comment>
						</div>
					))}
				</div>
			</div>
		);
	}
}
