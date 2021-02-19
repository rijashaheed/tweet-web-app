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
import { auth, storage, db } from "../firebase.js";

function SignUp() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [fullname, setFullname] = useState("");
	const [contact, setContact] = useState("");
	const [profilePic, setProfilePic] = useState(null);

	const uploadPic = async (e) => {
		const file = e.target.files[0];
		const storageRef = storage.ref("profilePics/");
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		const picUrl = await fileRef.getDownloadURL();
		// console.log(await fileRef.getDownloadURL());
		setProfilePic(picUrl);
		console.log(profilePic);
	};

	const writeUserData = (user) => {
		db
			.ref("users/" + user.userId)
			.set(user)
			.catch((error) => {
				console.log(error);
			});
	};

	const signUp = async (e) => {
		try {
			console.log(email, username, fullname, contact);
			const authUser = await auth.createUserWithEmailAndPassword(email, password);

			const user = {
				email: email,
				username: username,
				fullname: fullname,
				contact: contact,
				profilePic: profilePic,
				userId: authUser.uid,
			};
			await writeUserData(user);
		} catch (error) {
			console.log(error.message);
		}
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
										onChange={uploadPic}
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
