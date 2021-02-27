import React from "react";
import "../Pages/Profile.css";

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
			<div>
				<button class="UserArea__editProfileBtn">Edit Profile</button>
			</div>
		</div>
	);
}

export default UserInfoArea;
