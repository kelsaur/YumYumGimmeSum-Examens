import "./Button.scss";

export const Button = ({ children, onClick, className }) => {
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
};
