import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Reservation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: true,
			numberOfGuests: 0
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<form>
				<label>
					<h1>Detail about Reservation</h1>
				</label>
				<label>
					person Is going:
					<input
						name="isGoing"
						type="checkbox"
						checked={this.state.isGoing}
						onChange={this.handleInputChange} />
				</label>
				<br />
				<label>
					Number of guests:
					<input
						name="numberOfGuests"
						type="number"
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange} />
				</label>
			</form>
		);
	}
}


export default Reservation;
