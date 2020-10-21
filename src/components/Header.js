import React, { useEffect, useState } from "react";
import "./Header.css";
import Mistake from "./Mistake";
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const Header = () => {
	const [text, setText] = useState("");
	const [errors, setErrors] = useState([]);

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
		setErrors(check.matches);
	};

	const handlePaste = () => {
		navigator.clipboard
			.readText()
			.then((text) => {
				setText(text);
			})
			.catch((err) => {
				console.log("Something went wrong", err);
			});
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
					<a className="header__link" onClick={handlePaste}>Paste Plain Test below</a>
					<div className="mistake">
						{errors.map((error, index) => (
							<Mistake
								className="header__mistake"
								mistake={error.context.text.substr(
									error.context.offset,
									error.context.length
								)}
								message={error.message}
								key={index}
								replace={error.replacements}
								text={text}
								setText={setText}
							/>
						))}
					</div>
					<textarea onChange={grammar} value={text}></textarea>
					{errors.length === 0 ? <div className="error-container noError"><CheckIcon className="icon"/><p>You're good to go. </p></div>:<div className="error-container error-message"><ErrorOutlineIcon className="icon"/><p>Oops there seems to be some errors. </p></div>}
					<button className="btn__submit" onSubmit={checker}>Submit</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
