/*eslint-disable */
import React, { useState, useEffect } from "react";
import "./Profile.css";
import Tweet from "../Components/Tweet";
import { db, auth } from "../firebase";
import Navbar from "../Components/Navbar";
import SearchArea from "../Components/SearchArea";
import { Search } from "@material-ui/icons";

function UserInfoArea({ username, userhandle, profilePic }) {
	return (
		<div className="profile__user">
			<div className="profile__pictureBox">
				<img className="profile__picture" src={profilePic} alt="profile picture" />
			</div>
			<div className="profile__userInfo">
				<h2 className="profile__userFullname">{username}</h2>
				<span className="profile__username">@{userhandle}</span>
			</div>
		</div>
	);
}

function Profile() {
	const [currentUser, setCurrentUser] = useState(null);
	const [tweets, setTweets] = useState([]);
	const [user, setUser] = useState({});
	var arr = [];

	auth.onAuthStateChanged(function (user) {
		if (user) {
			console.log(user.uid);
			setCurrentUser(user.uid);
		} else {
			// No user is signed in.
		}
	});

	useEffect(() => {
		db
			.ref("tweets")
			.orderByChild("userId")
			.equalTo(currentUser)
			.once("value", function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					arr.push(childSnapshot);
					setTweets(arr.map((elem) => elem.val()));
				});
				console.log(tweets.length);
				console.log("outside loop", tweets);
			});

		db
			.ref("users")
			.orderByChild("userId")
			.equalTo(currentUser)
			.once("value", (snapshot) => {
				snapshot.forEach((childSnapshot) => {
					console.log(childSnapshot.val());
					setUser(childSnapshot.val());
				});
			});
	}, []);

	tweets.map((elem) => console.log("elem", elem.tweetMessage));

	return (
		<>
			<Navbar />
			<div className="profile">
				<h2 className="profile__header">Profile</h2>
				<UserInfoArea
					username={user.fullname}
					userhandle={user.username}
					profilePic={user.profilePic}
				/>

				{tweets.map((tweet) => (
					<Tweet
						displayName={tweet.createdBy}
						username={tweet.username}
						text={tweet.tweetMessage}
						image={tweet.tweetPic}
						// avatar={tweet.}
					/>
				))}
			</div>
			<SearchArea />
		</>
	);
}

export default Profile;
