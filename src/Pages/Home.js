import React from "react";
import "./Home.css";
import CreateTweet from "../Components/CreateTweet";
import Tweet from "../Components/Tweet";

function Home() {
	return (
		<div className="home">
			<h2 className="home__header">Helllo</h2>
			<CreateTweet />
			<Tweet />
			<Tweet />
			<Tweet />
			<Tweet />
			<Tweet />
		</div>
	);
}

export default Home;
