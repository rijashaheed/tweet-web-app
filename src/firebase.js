import firebase from "firebase";
import "firebase/storage";
import 'firebase/storage';

const firebaseConfig = {
	apiKey: "AIzaSyD_WqvijmorfDpLvGFpQYglhe1yjThoXVQ",
	authDomain: "tweet-web-app-7b686.firebaseapp.com",
	projectId: "tweet-web-app-7b686",
	storageBucket: "tweet-web-app-7b686.appspot.com",
	messagingSenderId: "721513512804",
	appId: "1:721513512804:web:2b70af0bf6133938350471",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.database();
const storage = firebaseApp.storage();

export { auth, db, storage };
