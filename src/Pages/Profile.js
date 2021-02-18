/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "./Profile.css";
import Tweet from "../Components/Tweet";
import { db, auth } from "../firebase";

function UserInfoArea() {
	return (
		<div className="profile__user">
			<div className="profile__pictureBox">
				<img
					className="profile__picture"
					src="https://firebasestorage.googleapis.com/v0/b/tweet-web-app-7b686.appspot.com/o/472.jpg?alt=media&token=52f3d2fe-c319-4b79-b00a-6ec20c61152b"
					alt="profile picture"
				/>
			</div>
			<div className="profile__userInfo">
				<h2 className="profile__userFullname">Rija Shaheed</h2>
				<span className="profile__username">@rijashaheed</span>
			</div>
		</div>
	);
}

function Profile() {
	var currentUid = auth.currentUser.uid;
	const [tweets, setTweets] = useState("");

	//run when feed component loads 2:54
	// useEffect(() => {
	// 	db
	// 		.ref("tweets")
	// 		// .equalTo(currentUid)
	// 		.once("value", (snapshot) => {
	// 			snapshot.forEach((childSnapshot) => {
	// 				setTweets(childSnapshot.val());
	// 			});
	// 		});
	// }, []);

	return (
		<div className="profile">
			<h2 className="profile__header">Profile</h2>
			<UserInfoArea />
			{/* {tweets.map((tweet) => (
				<Tweet
					displayName={tweet.displayName}
					userName={tweet.userId}
					text={tweet.tweetMessage}
					image={tweet.tweetPic}
					avatar="https://www.gravatar.com/avatar/c6c487b3f2d680a5bb97b3af06eb747f"
				/>
			))} */}
			<Tweet
				displayName="Hamna Shaheed"
				userName={currentUid}
				text="I'm beautiful"
				image="https://firebasestorage.googleapis.com/v0/b/tweet-web-app-7b686.appspot.com/o/472.jpg?alt=media&token=52f3d2fe-c319-4b79-b00a-6ec20c61152b"
				avatar="https://www.gravatar.com/avatar/c6c487b3f2d680a5bb97b3af06eb747f"
			/>
			<Tweet />
			<Tweet />
		</div>
	);
}

export default Profile;
