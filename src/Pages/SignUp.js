/*eslint-disable*/
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Pages.css";
import "./SignUp.css";
import { Form, FormGroup, Input, Container, Row, Col } from "reactstrap";
import { auth, storage, db } from "../firebase.js";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import { Link, useHistory } from "react-router-dom";

function SignUp() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [fullname, setFullname] = useState("");
	const [contact, setContact] = useState("");
	const [profilePic, setProfilePic] = useState(null);
	const fullnameArr = fullname.split("");
	const passArr = password.split("");
	const contactArr = contact.split("");
	const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const numbers = /\d/;
	const capLetter = /[A-Z]/;
	const symbols = /[-\/:-@\[-\`{-~!]/;

	const uploadPic = async (e) => {
		const file = e.target.files[0];
		const storageRef = storage.ref("profilePics/");
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		const picUrl = await fileRef.getDownloadURL();
		setProfilePic(picUrl);
		console.log(profilePic);
	};

	const writeUserData = (user) => {
		console.log(user.userId);
		db
			.ref("users/" + user.userId)
			.set(user)
			.catch((error) => {
				console.log(error);
			});
	};

	const validate = () => {
		if (
			username === "" ||
			fullname === "" ||
			contact === "" ||
			email === "" ||
			password === "" ||
			confirmPassword === ""
		) {
			alert("All fields are required");
			return false;
		}

		if (fullnameArr[0] !== fullnameArr[0].toUpperCase()) {
			alert("First letter of your name should be capital");
			return false;
		}

		if (contactArr.length < 11) {
			alert("Enter a valid phone no");
			return false;
		}

		if (!email.match(emailFormat)) {
			alert("Please enter a valid Email address");
			return false;
		}

		if (
			passArr.length < 8 ||
			!numbers.test(password) ||
			!capLetter.test(password) ||
			!symbols.test(password)
		) {
			alert(
				"Password must be minimum of 8 characters length with a number, capital letter and special charater included"
			);
			return false;
		}
		if (confirmPassword !== password) {
			alert("Password do not match");
		} else {
			signUp();
		}
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
				userId: authUser.user.uid,
			};
			console.log(authUser);
			await writeUserData(user);
			history.push("/home");
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
						<div className="signup">
							<h2 className="signup__head">Create an Account</h2>
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
									<div class="image-upload">
										<label class="signup__IconLabel" for="file-input">
											<FaceOutlinedIcon className="signup__profilePicIcon" />
										</label>
										<input id="file-input" type="file" onChange={uploadPic} />
										<span className="signup__profilePicLabel">
											Upload your profile picture here
										</span>
									</div>
								</FormGroup>
							</Form>
							<button className="signup__btn" type="submit" onClick={validate}>
								Sign Up
							</button>
						</div>
						<p className="signup__bottomOption">
							Already have an account? <Link to="/">Sign In</Link>
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default SignUp;
