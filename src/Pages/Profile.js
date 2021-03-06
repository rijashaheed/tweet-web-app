/*eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import Tweet from "../Components/Tweet";
import { db } from "../firebase";
import { AppContext } from "../App";
import moment from "moment";
// import querybase from "querybase";
import UserInfoArea from "../Components/UserInfoArea";

function Profile() {
	const appContext = useContext(AppContext);
	const [tweets, setTweets] = useState([]);
	const [user, setUser] = useState({}); //this will get the user data like his name, picture etc by matching current's userId
	const currentUser = appContext.userState.user.uid; //it takes global user state
	var arr = [];

	useEffect(() => {
		console.log("current user outside useEffect", currentUser);

		db
			.ref("users")
			.orderByChild("userId")
			.equalTo(currentUser)
			.once("value", (snapshot) => {
				snapshot.forEach((childSnapshot) => {
					console.log(childSnapshot.val());
					setUser(childSnapshot.val());
					console.log(user);
				});
			});

		db
			.ref("tweets")
			.orderByChild("userId")
			.equalTo(currentUser)
			.once("value", function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					arr.push(childSnapshot);
					console.log(arr.map((elem) => elem.val().createdOn));
					setTweets(arr.map((elem) => elem.val()));
				});
				console.log(tweets.length);
				console.log("outside loop", tweets);
			});
	}, []);

	console.log("current user outside useEffect", currentUser);

	tweets.map((elem) => console.log("elem", elem.tweetMessage));

	return (
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

export default Profile;

// const dbRef = db.ref("users").child();
// const querybaseRef = querybase.ref(dbRef, [
// 	"text",
// 	"image",
// 	"createdBy",
// 	"userhandle",
// 	"createdOn",
// 	"postedOn",
// 	"likes",
// 	"userAvatar",
// 	"userId",
// ]);

// const queriedDbRef = querybaseRef.where({
// 	userId: currentUser,
// });

// console.log("queriedDbRef", queriedDbRef);
// queriedDbRef
// 	.orderByChild("createdOn")
// 	// .equalTo(currentUser)
// 	.once("value", (snapshot) => {
// 		snapshot.forEach((childSnapshot) => {
// 			console.log(childSnapshot.val());
// 			setUser(childSnapshot.val());
// 			console.log(user);
// 		});
// 	});
