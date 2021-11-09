import { useState, useContext } from 'react';

import AppContext from '../../../store/context';
import Logo from '../../../assets/logo.svg';
import CartIcon from '../../../assets/icon-cart.svg';
import Cart from '../../Cart/Cart';
import Avatar from '../../../assets/image-avatar.png';
import MenuIcon from '../../../assets/icon-menu.svg';
import Drawer from './Drawer';
import NavLinks from './NavLinks';

import classes from './Navigation.module.css';

function Navigation() {
	const ctx = useContext(AppContext);

	const [showDrawer, setShowDrawer] = useState(false);
	const [showCart, setShowCart] = useState(false);
	
	const mobileNav = ctx.windowWidth <= 1024;

	const showDrawerHandler = () => {
		setShowDrawer(true);
	}

	const hideDrawerHandler = () => {
		setShowDrawer(false);
	}

	const toggleCartHandler = () => {
		setShowCart(!showCart);
	}

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
							<img src={MenuIcon} alt="menu" onClick={showDrawerHandler} />
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
						<img src={CartIcon} alt="cart" onClick={toggleCartHandler} />
					</div>
					<div className={classes.avatar}>
						<img src={Avatar} alt="avatar" />
					</div>
				</div>
			</div>
			{
				showCart ? <Cart /> : null
			}
		</header>
	);
}

export default Navigation;
