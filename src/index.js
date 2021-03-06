import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import HelloWorld from "./HelloWorld";
import JSX from "./JSX";
import Tick from "./Tick";
import Welcome1 from "./Welcome";
import WelcomeWith3Name from "./WelcomeWith3Name";
import Comment1 from "./Comment1";
import Comment2 from "./Comment2";
import Tick1 from "./Clock";
// import tick123 from './Clock1';
import Clock2 from "./Clock2";
import LifecycleHooks from "./LifecycleHooks";
import TheDataFlowsDown from "./TheDataFlowsDown";
import App1 from "./3Clock";
import Toggle from "./Toggle";
import Greeting from "./Greeting";
import LoginControl from "./LoginControl";
import Mailbox from "./Mailbox";
import Page from "./WarningBanner";
import listItems from "./ListItems";
import NumberList from "./NumberList";
import NumberListS from "./CorrectKeyUsage";
import Blog from "./Blog";
import NumberList1 from "./NumberList1";
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
import Reservation from "./Reservation";
import Calculator from "./BoilingVerdict";
import Calculator1 from "./TemperatureInput";
import Split from "./SplitPane";
import WelcomeDialog from "./WelcomeDialog";
import SignUpDialog from "./SignUpDialog";


ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<HelloWorld />, document.getElementById("root1"));
ReactDOM.render(<JSX />, document.getElementById("root2"));
ReactDOM.render(<Tick />, document.getElementById("root3"));
ReactDOM.render(<Welcome1 />, document.getElementById("root4"));
ReactDOM.render(<WelcomeWith3Name />, document.getElementById("root5"));
ReactDOM.render(<Comment1 />, document.getElementById("root6"));
ReactDOM.render(<Comment2 />, document.getElementById("root7"));
ReactDOM.render(<Tick1 />, document.getElementById("root8"));
// ReactDOM.render(<tick123 /> , document.getElementById("root9"));
ReactDOM.render(<Clock2 />, document.getElementById("root10"));
ReactDOM.render(<LifecycleHooks />, document.getElementById("root11"));
ReactDOM.render(<TheDataFlowsDown />, document.getElementById("root12"));
ReactDOM.render(<App1 />, document.getElementById("root13"));
ReactDOM.render(<Toggle />, document.getElementById("root14"));
ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById("root15"));
ReactDOM.render(<LoginControl />, document.getElementById("root16"));
ReactDOM.render(<Mailbox unreadMessages="messages" />, document.getElementById("root17"));
ReactDOM.render(<Page />, document.getElementById("root18"));
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("root19"));
ReactDOM.render(<NumberList numbers="numbers" />, document.getElementById("root20"));
ReactDOM.render(<NumberListS numbers="numbers" />, document.getElementById("root21"));
ReactDOM.render(<Blog posts="posts" />, document.getElementById("root22"));
ReactDOM.render(<NumberList1 numbers="numbers" />, document.getElementById("root23"));
ReactDOM.render(<NameForm />, document.getElementById("root24"));
ReactDOM.render(<EssayForm />, document.getElementById("root25"));
ReactDOM.render(<FlavorForm />, document.getElementById("root26"));
ReactDOM.render(<Reservation />, document.getElementById("root27"));
ReactDOM.render(<Calculator />, document.getElementById("root28"));
ReactDOM.render(<Calculator1 />, document.getElementById("root29"));
ReactDOM.render(<Split />, document.getElementById("root30"));
ReactDOM.render(<WelcomeDialog />, document.getElementById("root31"));
ReactDOM.render(<SignUpDialog />, document.getElementById("root32"));

registerServiceWorker();


