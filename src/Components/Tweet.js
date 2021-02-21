import React from "react";
import "./Tweet.css";
import Avatar from "./Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Tweet({ displayName, username, text, image, avatar }) {
	return (
		<div className="tweet">
			<div className="tweet__avatar">
				<Avatar src={avatar} />
			</div>
			<div className="tweet__body">
				<div className="tweet__header">
					<div className="tweet__headerText">
						<h4>{displayName}</h4>
						<span className="tweet__userHandle">@{username}</span>
					</div>
					<div className="tweet__headerDescription">
						<p>{text}</p>
					</div>
				</div>
				<img className="tweet__picture" src={image} alt="postImage" />
				<div className="tweet__footer">
					<FavoriteBorderIcon fontSize="small" />
					<span className="tweet__postTime">Jul 4, 2019</span>
				</div>
			</div>
		</div>
	);
}

export default Tweet;
