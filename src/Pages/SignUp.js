import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Pages.css";
import {
	Button,
	Form,
	FormGroup,
	Input,
	FormText,
	Container,
	Row,
	Col,
} from "reactstrap";
import { auth } from "../firebase.js";

function SignUp() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [fullname, setFullname] = useState("");
	const [contact, setContact] = useState("");
	const [profilePic, setProfilePic] = useState("");

	const signUp = (e) => {
		e.preventDefault();
		console.log(email, username, fullname, contact, profilePic);
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				console.log(user);
			})
			.catch((error) => {
				var errorMessage = error.message;
				console.log(errorMessage);
			});
	};

	return (
		<>
			<Container fluid>
				<Row>
					<Col xs="6" className="column">
						<Sidebar />
					</Col>
					<Col>
						<div className="sign-up">
							<h3 className="sign-up-head">Create an Account</h3>
							<Form onSubmit={(e) => e.preventDefault() && false}>
								<FormGroup>
									<Input
										className="input-field"
										type="email"
										name="email"
										placeholder="Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</FormGroup>

								<FormGroup>
									<Input
										className="input-field"
										type="text"
										name="username"
										placeholder="Username"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</FormGroup>

								<FormGroup>
									<Input
										className="input-field"
										type="password"
										name="password"
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</FormGroup>

								<FormGroup>
									<Input
										className="input-field"
										type="password"
										name="confirmpassword"
										placeholder="Retype your password"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
									/>
								</FormGroup>

								<FormGroup>
									<Input
										className="input-field"
										type="text"
										name="fullname"
										placeholder="Full Name"
										value={fullname}
										onChange={(e) => setFullname(e.target.value)}
									/>
								</FormGroup>

								<FormGroup>
									<Input
										className="input-field"
										type="number"
										name="contact"
										placeholder="Contact Number"
										value={contact}
										onChange={(e) => setContact(e.target.value)}
									/>
								</FormGroup>

								<FormGroup>
									<Input
										className="input-field"
										type="file"
										name="file"
										id="exampleFile"
										value={profilePic}
										onChange={(e) => setProfilePic(e.target.value)}
									/>
									<FormText color="muted">Upload your profile picture here</FormText>
								</FormGroup>
							</Form>
							<Button variant="custom" type="submit" onClick={signUp}>
								Sign Up
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default SignUp;
