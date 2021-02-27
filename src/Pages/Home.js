/*eslint-disable */
import React, { useEffect, useState } from "react";
import "./Home.css";
import CreateTweet from "../Components/CreateTweet";
import Tweet from "../Components/Tweet";
import { db } from "../firebase";
import moment from "moment";
// import { AppContext } from "../App";

// import { AppContext } from "../App";
// import Navbar from "../Components/Navbar";
// import SearchArea from "../Components/SearchArea";

function Home() {
	// const appContext = useContext(AppContext);
	// const currentUser = appContext.userState.user.uid;
	const [tweets, setTweets] = useState([]);
	var arr = [];

	useEffect(() => {
		db //it calls tweets from firebase
			.ref("tweets")
			.orderByChild("createdOn")
			.once("value", function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					arr.push(childSnapshot);
					setTweets(arr.map((elem) => elem.val()));
					console.log(tweets);
				});
				console.log(tweets.length);
				console.log("outside loop", tweets);
				tweets.map((tweet) => {
					console.log(tweet.postedOn);
				});
			});
	}, []);

	return (
		<div className="home">
			<h2 className="home__header">Home</h2>
			<CreateTweet />
			{tweets.map((tweet) => (
				<Tweet
					displayName={tweet.createdBy}
					username={tweet.userhandle}
					text={tweet.text}
					image={tweet.image}
					avatar={tweet.userAvatar}
					date={moment.unix(tweet.postedOn).format("MMMM Do YYYY, h:mm:ss a")}
				/>
			))}
		</div>
	);
}

export default Home;
