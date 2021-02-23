import React from "react";
import "./Home.css";
import CreateTweet from "../Components/CreateTweet";
import Tweet from "../Components/Tweet";
// import { AppContext } from "../App";
// import Navbar from "../Components/Navbar";
// import SearchArea from "../Components/SearchArea";

function Home() {
	return (
		<div>
			<div className="home">
				<h2 className="home__header">Home</h2>
				<CreateTweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
			</div>
		</div>
	);
}

export default Home;
