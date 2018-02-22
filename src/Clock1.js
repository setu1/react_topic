import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Clock1 extends React.Component {
render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

function tick123() {
	return {
	<Clock1 date={new Date()} />
}
}



export default tick123;
