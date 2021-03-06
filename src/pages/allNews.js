import React, { Component } from "react";

import { topStoriesUrl } from "utils/api";
import NewsList from "components/NewsList/newsList";
import Loading from "components/Loading";

export default class AllNews extends Component {
	constructor() {
		super();
		this.state = {
			stories: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		fetch(topStoriesUrl)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					stories: [...data],
					isLoading: false,
				});
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div className="container">
				<div>
					{this.state.isLoading && <Loading></Loading>}
					{!this.state.isLoading && <NewsList state={this.state}></NewsList>}
				</div>
			</div>
		);
	}
}
