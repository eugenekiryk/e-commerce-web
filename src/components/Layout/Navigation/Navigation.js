import { useState, useEffect } from 'react';

import Logo from '../../../assets/logo.svg';
import CartIcon from '../../../assets/icon-cart.svg';
import Avatar from '../../../assets/image-avatar.png';
import Menu from '../../../assets/icon-menu.svg';
import Drawer from './Drawer';
import NavLinks from './NavLinks';

import classes from './Navigation.module.css';

function Navigation() {
	const [showDrawer, setShowDrawer] = useState(false);
	const [windowWidth, setWindowWidth] = useState(null);
	const mobileNav = windowWidth <= 1024;

	const showDrawerHandler = () => {
		setShowDrawer(true);
	}

	const hideDrawerHandler = () => {
		setShowDrawer(false);
	}

	const windowResizeHandler = () => {
		setWindowWidth(window.innerWidth);
	}

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', windowResizeHandler);

		return () => {
			window.removeEventListener('resize', windowResizeHandler);
		}
	}, [windowWidth]);

	return (
		<header className={classes.header}>
			{
				showDrawer && mobileNav ? 
					<Drawer onHideDrawer={hideDrawerHandler} /> : null
			}
			<div className={classes['header-wrapper']}>
				<div className={classes['nav-links']}>
					{
						mobileNav ? 
						<div className={classes['hamburger-menu']}>
							<img src={Menu} alt="menu" onClick={showDrawerHandler} />
						</div> : null
					}
					<div className={classes.logo}>
						<img src={Logo} alt="sneakers" />
					</div>
					{
						!mobileNav ? 
						<nav className={classes.nav}>
							<NavLinks />
						</nav> : null 
					}
				</div>
				<div className={classes['nav-icons']}>
					<div>
						<img src={CartIcon} alt="cart" />
					</div>
					<div className={classes.avatar}>
						<img src={Avatar} alt="avatar" />
					</div>
				</div>
			</div>
			<hr />
		</header>
	);
}

export default Navigation;