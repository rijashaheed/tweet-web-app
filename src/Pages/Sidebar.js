import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages.css";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__text">
				<div className="sidebar__liner">
					<SearchIcon />
					<h5 className="sidebar__linerHead">Follow your interest</h5>
				</div>
				<div className="sidebar__liner">
					<PeopleOutlineIcon />
					<h5 className="sidebar__linerHead">Here what people are talking about</h5>
				</div>
				<div className="sidebar__liner">
					<ChatBubbleOutlineOutlinedIcon />
					<h5 className="sidebar__linerHead">Join the conversation</h5>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
