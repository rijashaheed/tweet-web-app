/*eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import "../Components.css";
import "./CreateTweet.css";
import Avatar from "./Avatar";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { db, storage } from "../firebase.js";
import { AppContext } from "../App";

function CreateTweet() {
	const appContext = useContext(AppContext);
	const currentUser = appContext.userState.user.uid;
	const [message, setMessage] = useState("");
	const [pic, setPic] = useState(null);
	// const [userId, setUserId] = useState(null);
	const [user, setUser] = useState({});
	let likes = 0;

	// auth.onAuthStateChanged(function (user) {
	// 	if (user) {
	// 		console.log(user.uid);
	// 		setUserId(user.uid);
	// 	} else {
	// 		// No user is signed in.
	// 	}
	// });

	useEffect(() => {
		console.log(currentUser);
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
	}, []);

	const uploadPic = async (e) => {
		console.log("running");
		const file = e.target.files[0];
		const storageRef = storage.ref("tweetPics/");
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		const picUrl = await fileRef.getDownloadURL();
		// console.log(await fileRef.getDownloadURL());
		setPic(picUrl);
		console.log(pic);
	};

	const postTweet = () => {
		console.log("running");
		const dbTweets = db.ref("/tweets");

		const tweet = {
			text: message,
			image: pic,
			createdBy: user.fullname,
			userhandle: user.username,
			createdOn: Math.round((-1 * new Date().getTime()) / 1000),
			postedOn: Math.round(new Date().getTime() / 1000),
			likes: likes,
			userAvatar: user.profilePic,
			userId: currentUser,
		};

		const tweetKey = dbTweets.push(tweet).key;
		console.log("tweet", tweetKey, currentUser);
		setMessage("");
	};

	return (
		<div className="createTweet">
			<div className="createTweet__input">
				<Avatar src={user.profilePic} />

				<input
					className="message"
					id="tweet"
					name="tweet"
					rows="4"
					cols="50"
					placeholder="What's on your mind?"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></input>
			</div>
			<div className="createTweet__bottomLine">
				<div className="image-upload">
					<label className="createTweet__IconLabel" htmlFor="file-input">
						<ImageOutlinedIcon className="createTweet__uploadImage" />
					</label>
					<input id="file-input" type="file" onChange={uploadPic} />
				</div>
				<button className="createTweet__tweetButton" onClick={postTweet}>
					Tweet
				</button>
			</div>
		</div>
	);
}

export default CreateTweet;
