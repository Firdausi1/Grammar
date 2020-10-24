import React from "react";
import "./GrammarLessons.css";

const GrammarLessons = () => {
	return (
		<div className="grammarLesson">
			<h2>
				<span>Grammar</span> Lessons
			</h2>
			<div className="grammarLesson__container">
				<div className="grammarLesson__box">
					<ul>
						<li className="list-title">1. Figure of speech</li>
						<li>Simile</li>
						<li>Personification</li>
						<li>Hyperbole</li>
						<li>Metaphor</li>
					</ul>
				</div>
				<div className="grammarLesson__box">
					<ul>
						<li className="list-title">2. Know your language</li>
						<li>Nouns</li>
						<li>Pronouns</li>
						<li>Verbs</li>
						<li>Sentence Parts</li>
						<li>Modifiers</li>
						<li>Preposition</li>
						<li>Conjunstions</li>
					</ul>
				</div>
				<div className="grammarLesson__box">
					<ul>
						<li className="list-title">3. English Writting</li>
						<li>Fundamentals of english writting</li>
						<li>Formal Letter</li>
						<li>In-Formal Letter</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default GrammarLessons;
