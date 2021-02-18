import React from "react";
import "./Tweet.css";
import Avatar from "./Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Tweet({ displayName, userName, text, image, avatar }) {
	return (
		<div className="tweet">
			<div className="tweet__avatar">
				<Avatar src="https://www.gravatar.com/avatar/c6c487b3f2d680a5bb97b3af06eb747f" />
			</div>
			<div className="tweet__body">
				<div className="tweet__header">
					<div className="tweet__headerText">
						<h4>Rija Shaheed </h4>
						<span className="tweet__userHandle">@rijashaheed</span>
					</div>
					<div className="tweet__headerDescription">
						<p>Built twitter</p>
					</div>
				</div>
				<img
					className="tweet__picture"
					src="https://firebasestorage.googleapis.com/v0/b/tweet-web-app-7b686.appspot.com/o/472.jpg?alt=media&token=52f3d2fe-c319-4b79-b00a-6ec20c61152b"
					alt="postImage"
				/>
				<div className="tweet__footer">
					<FavoriteBorderIcon fontSize="small" />
					<span className="tweet__postTime">Jul 4, 2019</span>
				</div>
			</div>
		</div>
	);
}

export default Tweet;
