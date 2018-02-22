import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


const messages = ["React", "Re: React", "Re:Re: React"];

function Mailbox(props) {
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>Hello!</h1>
			{unreadMessages.length > 0 &&
				<h2>
					You have {unreadMessages.length} unread messages.
				</h2>
			}
		</div>
	);
}

export default Mailbox;
