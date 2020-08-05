import React from "react";
import "./App.css";
import AllNews from "pages/allNews";
import SingleNews from "pages/singleNews";
import "style/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router basename={process.env.PUBLIC_URL}>
				<Route exact path="/" component={AllNews} />
				<Route path="/:newsId" component={SingleNews} />
			</Router>
		</div>
	);
}

export default App;
