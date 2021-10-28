import classes from './Layout.module.css';

function Layout({ children }) {
	return <div className={classes.layout}>{children}</div>;
}

export default Layout;
