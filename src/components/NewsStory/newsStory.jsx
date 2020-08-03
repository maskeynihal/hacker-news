import React, { Component } from "react";
import { getItemUrlById } from "utils/api";
import Card from "components/Card";
import Loading from "components/Loading";
export default class NewsStory extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: true,
			data: {},
		};
	}

	componentDidMount() {
		fetch(getItemUrlById(this.props.id))
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					data,
					isLoading: false,
				});
			});
	}

	render() {
		return (
			<div>
				{this.state.isLoading && <Loading></Loading>}
				{!this.state.isLoading && <Card data={this.state.data}></Card>}
			</div>
		);
	}
}
