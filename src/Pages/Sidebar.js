import React from "react";
// import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages.css";

function Sidebar() {
	return (
		<div className="title-sidebar">
			<i class="fas fa-search"></i>
			<h5>Follow your interest</h5>
			<h5>Here what people are talking about</h5>
			<h5>Join the conversation</h5>
		</div>
	);
}

export default Sidebar;
