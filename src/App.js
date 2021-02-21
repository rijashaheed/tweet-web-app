/*eslint-disable*/
import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import LikedTweets from "./Pages/LikedTweets";
import SignIn from "./Pages/SignIn";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/home" exact component={Home} />
					<Route path="/profile" component={Profile} />
					<Route path="/likedTweets" component={LikedTweets} />
					<Route path="/sign-up" component={SignUp} />
					<Route path="/" component={SignIn} />
					<Route path="/*" children={<Error />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
