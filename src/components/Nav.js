import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Nav = () => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<nav className="nav">
			<Link to="/" className="nav__logo">
				<img src="../../Group 25logo.svg" alt="logo" />
			</Link>
			<div onClick={handleClick} className="nav__mobile">
				{clicked ? <CloseIcon /> : <MenuIcon />}
			</div>
			<ul className={clicked ? "nav__list mobile" : "nav__list"} onClick={handleClick}>
				
					<li className="nav__menu">
						<span>MENU</span>
					</li>
				
				<li>
					<NavLink to="/" exact activeClassName="active">
						Grammar <br /> check
					</NavLink>
				</li>
				<li>
					<NavLink to="/grammarlessons">
						Grammar <br /> Lessons
					</NavLink>
				</li>
				<li>
					<NavLink to="/grammarquizzes">
						Grammar <br />
						Quiz{" "}
					</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/careers">Careers </NavLink>
				</li>
				<li>
					<NavLink to="/blog">Blog</NavLink>
				</li>
				<li>
					<button className="btn-primary">Contact Us</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
