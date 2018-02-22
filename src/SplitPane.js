import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


function Contacts() {
	return <div className="Contacts" />;
}

function Chat() {
	return <div className="Chat" />;
}

function SplitPane(props) {
	return (
		<div className="SplitPane">
			<div className="SplitPane-left">
				{props.left}
			</div>
			<div className="SplitPane-right">
				{props.right}
			</div>
		</div>
	);
}

function Split() {
	return (
		<SplitPane
			left={
				<Contacts />
			}
			right={
				<Chat />
			} />
	);

}


export default Split;
