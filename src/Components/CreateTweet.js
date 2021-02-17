import React, { useState } from "react";
// import { Button } from "reactstrap";
import "../Components.css";
import "./CreateTweet.css";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { auth, db, storage } from "../firebase.js";

function CreateTweet() {
	const [message, setMessage] = useState("");
	const [pic, setPic] = useState(null);

	const uploadPic = async (e) => {
		const file = e.target.files[0];
		const storageRef = storage.ref("tweetPics/");
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		console.log(await fileRef.getDownloadURL());
		setPic(await fileRef.getDownloadURL());
		console.log(pic);
	};
	const postTweet = () => {
		const dbTweets = db.ref("/tweets");
		var userId = auth.currentUser.uid;
		const tweet = {
			tweetMessage: message,
			tweetPic: pic,
			userId: userId,
		};

		const tweetKey = dbTweets.push(tweet).key;
		console.log("tweet", tweetKey);
	};

	const Avatar = ({ hash }) => {
		const url =
			"https://www.gravatar.com/avatar/c6c487b3f2d680a5bb97b3af06eb747f";
		return <img src={url} className="avatar" alt="avatar" />;
	};

	return (
		<div className="createTweet">
			<form>
				<div className="createTweet__input">
					<Avatar />
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
						<label for="file-input">
							<ImageOutlinedIcon></ImageOutlinedIcon>
						</label>
						<input id="file-input" type="file" onchange={uploadPic} />
					</div>
					<button class="createTweet__tweetButton" onclick={postTweet}>
						Tweet
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateTweet;
