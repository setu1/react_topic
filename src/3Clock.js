import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function FormattedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<FormattedDate date={this.state.date} />
			</div>
		);
	}
}

function App1() {
	return (
		<div>
			<Clock3 />
			<Clock3 />
			<Clock3 />
		</div>
	);
}

export default App1;
