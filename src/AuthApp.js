import React from "react";
import Navbar from "./Components/Navbar";
import SearchArea from "./Components/SearchArea";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import LikedTweets from "./Pages/LikedTweets";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function AuthApp() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/profile" component={Profile} />
					<Route path="/likedTweets" component={LikedTweets} />
				</Switch>
			</Router>
			<SearchArea />
		</div>
	);
}

export default AuthApp;
