import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
	children: ReactNode;
	onClick?: () => void;
};
const Button = ({ children, onClick }: PropsType) => {
	return (
		<button
			onClick={onClick}
			style={{
				width: "100%",
				display: "inline-block",
				overflow: "hidden",
				padding: "20px 30px",
				fontSize: "1.2em",
				color: "#03e9f4",
				borderRadius: "5px",
				cursor: "pointer",
				backgroundColor: "blue",
				border: "none",
			}}
		>
			{children}
		</button>
	);
};

export { Button };