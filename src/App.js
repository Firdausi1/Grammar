import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import GrammarLessons from "./components/GrammarLessons";
import GrammarQuizz from "./components/GrammarQuizz";
import ContactUs from "./components/ContactUs";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact>
						<Header />
						<Body />
						<About />
					</Route>
					<Route path="/grammarlessons" exact>
						<GrammarLessons />
					</Route>

					<Route path="/grammarquizzes" exact>
						<GrammarQuizz />
					</Route>
					<Route path="/contactus" exact>
						<ContactUs/>
					</Route>

					<Route path="/:id" exact>
						<ErrorPage />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
