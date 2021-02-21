import React from "react";
import "./Home.css";
import CreateTweet from "../Components/CreateTweet";
import Tweet from "../Components/Tweet";
import Navbar from "../Components/Navbar";
import SearchArea from "../Components/SearchArea";

function Home() {
	return (
		<>
			<Navbar />
			<div className="home">
				<h2 className="home__header">Home</h2>
				<CreateTweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
			</div>
			<SearchArea />
		</>
	);
}

export default Home;
