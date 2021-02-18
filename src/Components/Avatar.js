import React from "react";
import "./Avatar.css";

const Avatar = ({ src }) => {
	// const url = "https://www.gravatar.com/avatar/c6c487b3f2d680a5bb97b3af06eb747f";
	return <img src={src} className="avatar" alt="avatar" />;
};

export default Avatar;
