import classes from './Button.module.css';

function Button({ children, disabled, onClick }) {
	return (
		<button className={classes.button} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;