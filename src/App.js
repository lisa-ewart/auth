import React, { Component } from 'react';
import firebase from 'firebase';
import { View} from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component {
	componentWillMount(){
		firebase.initializeApp({
    apiKey: "AIzaSyB-AOqCsA2dmQoK8hUuXyiDRp7Xt5vO4pg",
    authDomain: "auth-4fc38.firebaseapp.com",
    databaseURL: "https://auth-4fc38.firebaseio.com",
    projectId: "auth-4fc38",
    storageBucket: "auth-4fc38.appspot.com",
    messagingSenderId: "956732929445"
  });
}
	render() {
		return (
			<View>
			<Header headerText="Authentication"/>
			<LoginForm />
			</View>
	  )
	}
}

const styles = {
	text:{
		color:'green',
		fontSize:12
	}
}

export default App;