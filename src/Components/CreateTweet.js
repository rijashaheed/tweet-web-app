/*eslint-disable */
import React, { useEffect, useState } from "react";
import "../Components.css";
import "./CreateTweet.css";
import Avatar from "./Avatar";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { auth, db, storage } from "../firebase.js";

function CreateTweet() {
	const [message, setMessage] = useState("");
	const [pic, setPic] = useState(null);
	const [userId, setUserId] = useState(null);
	const [user, setUser] = useState({});
	let likes = 0;

	auth.onAuthStateChanged(function (user) {
		if (user) {
			console.log(user.uid);
			setUserId(user.uid);
		} else {
			// No user is signed in.
		}
	});

	useEffect(() => {
		db
			.ref("users")
			.orderByChild("userId")
			.equalTo(userId)
			.once("value", (snapshot) => {
				snapshot.forEach((childSnapshot) => {
					console.log(childSnapshot.val());
					setUser(childSnapshot.val());
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
			createdOn: Date(),
			likes: likes,
			// userAvatar: user.profilePic && user.profilePic,
		};

		const tweetKey = dbTweets.push(tweet).key;
		console.log("tweet", tweetKey, userId);
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
				<div class="image-upload">
					<label class="createTweet__IconLabel" for="file-input">
						<ImageOutlinedIcon className="createTweet__uploadImage" />
					</label>
					<input id="file-input" type="file" onChange={uploadPic} />
				</div>
				<button class="createTweet__tweetButton" onClick={postTweet}>
					Tweet
				</button>
			</div>
		</div>
	);
}

export default CreateTweet;
