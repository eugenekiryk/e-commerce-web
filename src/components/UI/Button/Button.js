import classes from './Button.module.css';

function Button({ className, children, disabled, onClick }) {
	return (
		<button className={`${classes.button} ${className}`} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;