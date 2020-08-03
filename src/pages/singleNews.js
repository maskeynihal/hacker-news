import React, { Component } from "react";
import { getItemUrlById } from "utils/api";
import Card from "components/Card";
import Loading from "components/Loading";
import { CommentList } from "components/Comment";
export default class SingleNews extends Component {
	constructor() {
		super();

		this.state = {
			data: {},
			isLoading: true,
		};
	}

	componentDidMount() {
		fetch(getItemUrlById(this.props.match.params.newsId))
			.then((response) => response.json())
			.then((data) => this.setState({ data, isLoading: false }));
	}

	getNewsComments() {
		const r =
			this.state.data && this.state.data.kids ? this.state.data.kids : [];
		return r;
	}

	render() {
		return (
			<div>
				{this.state.isLoading && <Loading></Loading>}
				<div className="news__card">
					{!this.state.isLoading && <Card data={this.state.data}></Card>}
				</div>
				<div className="news__comments">
					{!this.state.isLoading && (
						<CommentList comments={this.getNewsComments()}></CommentList>
					)}
				</div>
			</div>
		);
	}
}
