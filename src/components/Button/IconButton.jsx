import React from "react";

export default function IconButton({ text, ...props }) {
	return (
		<div className="button button-icon">
			<div className="button-icon__icon">{props.children}</div>
			<div className="button-icon__text">{text}</div>
		</div>
	);
}
