import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: " "};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		// this.setState({value: event.target.value});
		this.setState({value: event.target.value.toUpperCase()});
	}

	handleSubmit(event) {
		alert("A name was submitted: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<h1>Enter your name here</h1>
				</label>
				<label>
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default NameForm;
