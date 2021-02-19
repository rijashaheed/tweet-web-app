import React, { useState } from "react";
import "../Components.css";
import "./CreateTweet.css";
import Avatar from "./Avatar";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { auth, db, storage } from "../firebase.js";
// import moment from "moment";

// const Time = ({ time }) => {
// 	<span></span>;
// };
function CreateTweet() {
	const [message, setMessage] = useState("");
	const [pic, setPic] = useState(null);

	const uploadPic = async (e) => {
		console.log("running");
		const file = e.target.files[0];
		const storageRef = storage.ref("tweetPics/");
		const fileRef = storageRef.child(file.name);
		// await fileRef.put(file);
		// const picUrl = await fileRef.getDownloadURL();
		// // console.log(picUrl);
		// setPic(picUrl);
		// console.log(pic);
		await fileRef.put(file);
		const picUrl = await fileRef.getDownloadURL();
		// console.log(await fileRef.getDownloadURL());
		setPic(picUrl);
		console.log(pic);
	};
	const postTweet = () => {
		console.log("running");
		const dbTweets = db.ref("/tweets");
		var userId = auth.currentUser.uid;
		const tweet = {
			tweetMessage: message,
			tweetPic: pic,
			userId: userId,
			postedOn: Date(),
		};

		const tweetKey = dbTweets.push(tweet).key;
		console.log(
			"tweet",
			tweetKey,
			userId
			// dbTweets.child.set(new Date().getTime())
		);

		// console.log("time", moment().fromNow());
	};

	// const Avatar = ({ hash }) => {
	// 	const url =
	// 		"https://www.gravatar.com/avatar/c6c487b3f2d680a5bb97b3af06eb747f";
	// 	return <img src={url} className="avatar" alt="avatar" />;
	// };

	return (
		<div className="createTweet">
			{/* <form> */}
			<div className="createTweet__input">
				<Avatar src="https://www.gravatar.com/avatar/c6c487b3f2d680a5bb97b3af06eb747f" />

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
			{/* </form> */}
		</div>
	);
}

export default CreateTweet;
