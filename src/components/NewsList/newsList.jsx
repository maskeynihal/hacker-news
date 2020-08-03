import React, { Component } from "react";
import NewsStory from "components/NewsStory";

export default class NewsList extends Component {
	componentDidMount() {
		const props = this.props;
		this.setState({ props: { ...props, isLoading: false } });
		console.log(this.props.state);
	}

	paginateStories() {
		return this.props.state.stories;
	}

	render() {
		return (
			<div>
				{this.paginateStories().map((story) => (
					<NewsStory id={story} key={story}></NewsStory>
				))}
			</div>
		);
	}
}
