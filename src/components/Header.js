import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header__text">
				<h2>
					Do you need A<br/><span> Grammar </span>Check?
				</h2>
				<p>
					<span>Make your work </span> error-free, smart and grammartically
					correct <span> in an instant! </span>
				</p>
			</div>
			<div className="header__body">
				<div className="header__img">
					<img src="grammar/../Layer 2img1.png" alt="header image" />
				</div>
				<div className="header__bodySide">
					<button>Upload File</button>
					<h3>OR</h3>
					<p>Paste Plain Test below</p>
					<textarea></textarea>
					<button className="btn__submit">Submit</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
