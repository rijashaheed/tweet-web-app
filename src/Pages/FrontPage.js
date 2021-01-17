import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages.css";
import Sidebar from "./Sidebar";

function FrontPage() {
	return (
		// <div>
		<Container fluid>
			<Row>
				<Col xs="6" className="column">
					<Sidebar />
				</Col>
				<Col xs="6">
					<Button className="signup-btn">Sign Up</Button>
					<Button outline className="signin-btn">
						Sign In
					</Button>
				</Col>
			</Row>
		</Container>
		// </div>
	);
}

export default FrontPage;
