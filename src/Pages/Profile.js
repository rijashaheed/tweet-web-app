/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Profile.css";

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
	return (
		<div className="profile">
			<h2 className="profile__header">Profile</h2>
			<UserInfoArea />
		</div>
	);
}

export default Profile;
