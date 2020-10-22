import React, { useState, useEffect } from "react";
import "./Mistake.css";

const Mistake = ({ message, mistake, replace, index, text, setText }) => {
	const [change, setChange] = useState("");

	const handleReplace = (e) => {
		setChange(e.target.value);
	};

	const replacetext = () => {
		text = text.replace(mistake, change);
		setText(text);
	};

	useEffect(() => {
        if(change){
		replacetext();}
	}, [change]);
	return (
		<div className="mistake__container">
			{message} <span> "{mistake}" </span> Replace with{" "}
			<select onChange={handleReplace}>
				<option>select</option>
				{replace.map((item) => (
					<option key={index}>{item.value}</option>
				))}
			</select>
		</div>
	);
};

export default Mistake;
