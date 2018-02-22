import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


function Clock(props) {
	return (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {props.date.toLocaleTimeString()}.</h2>
		</div>
	);
}

class Tick1 extends Component {
	render() {
		return (
			<Clock date={new Date()} />
		);
	}
}

export default Tick1;
