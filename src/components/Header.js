import React, { useEffect, useState } from "react";
import "./Header.css";
import Mistake from './Mistake';
const Header = () => {
	const [text, setText] = useState("");
	const [errors, setErrors] = useState([]);
	const [errorMessage, setErrorMessage] = useState([])
	

	const grammar = (e) => {
		setText(e.target.value);
	};

	const checker = async () => {
		
		const LanguageToolApi = require("language-grammar-api");

		const options = {
			endpoint: "https://languagetool.org/api/v2",
		};

		const languageToolClient = new LanguageToolApi(options);

		// const languages = await languageToolClient.languages();
		const check = await languageToolClient.check({
			text: text, // required
			language: "en-US", // required (you can use .languages call to get language)
		});
		console.log(check);
		setErrorMessage(check.matches);
		setErrors(check.matches);

	};
			
	useEffect(() => {
		checker();
	}, [text]);

	return (
		<div className="header">
			<div className="header__text">
				<h2>
					Do you need A<br />
					<span> Grammar </span>Check?
				</h2>
				<p>
					<span>Make your work </span> error-free, smart and grammartically
					correct <span> in an instant! </span>
				</p>
			</div>
			<div className="header__body">
				<div className="header__img">
					<img src="grammar/../Layer 2img1.png" alt="header" />
				</div>
				<div className="header__bodySide">
					<button>Upload File</button>
					<h3>OR</h3>
					<p>Paste Plain Test below</p>
					<div>
					{errorMessage.map((error, index) => (
						<Mistake message={error.message} key={index}/>
					))}
					</div>
					<div>
					{errors.map((error, index) => (
						<Mistake mistake={error.mistake} key={index}/>
					))}
					</div>
					<textarea onChange={grammar}>
					
					</textarea>
					
					<button className="btn__submit">Submit</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
