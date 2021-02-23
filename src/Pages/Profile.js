/*eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import Tweet from "../Components/Tweet";
import { db } from "../firebase";
import { AppContext } from "../App";

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
	const appContext = useContext(AppContext);
	const [tweets, setTweets] = useState([]);
	// const [user, setUser] = useState({}); //this will get the user data like his name, picture etc by matching current's userId
	const currentUser = appContext.userState.user; //it takes global user state
	var arr = [];

	useEffect(() => {
		// setUser(appContext.userState.user);
		console.log("current user outside useEffect", currentUser);

		db //it calls tweets from firebase
			.ref("tweets")
			.orderByChild("userId")
			// .equalTo(currentUser)t
			.once("value", function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					arr.push(childSnapshot);
					setTweets(arr.map((elem) => elem.val()));
				});
				console.log(tweets.length);
				console.log("outside loop", tweets);
			});

		// db     //it is supposed to match currentUserId i.e. global user state id to extract user's info which got saved at the time of sign up to display it in <UserInfoArea/ >
		// 	.ref("users")
		// 	.orderByChild("userId")
		// 	// .equalTo(currentUser)
		// 	.once("value", (snapshot) => {
		// 		snapshot.forEach((childSnapshot) => {
		// 			console.log(childSnapshot.val());
		// 			setUser(childSnapshot.val());
		// 		});
		// 	});
	}, []);

	console.log("current user outside useEffect", currentUser);
	// console.log(currentUser.uid);

	tweets.map((elem) => console.log("elem", elem.tweetMessage));

	return (
		<div className="profile">
			<h2 className="profile__header">Profile</h2>
			<UserInfoArea
				username="User"
				userhandle="test_user"
				profilePic="https://firebasestorage.googleapis.com/v0/b/tweet-web-app-7b686.appspot.com/o/472.jpg?alt=media&token=52f3d2fe-c319-4b79-b00a-6ec20c61152b"
			/>

			{tweets.map((tweet) => (
				<Tweet
					displayName={tweet.createdBy}
					username="userhandle"
					text={tweet.tweetMessage}
					image={tweet.tweetPic}
					// avatar={tweet.}
				/>
			))}
		</div>
	);
}

export default Profile;
