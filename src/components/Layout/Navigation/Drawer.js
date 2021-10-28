import { Fragment } from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import NavLinks from './NavLinks';
import CloseIcon from '../../../assets/icon-close.svg';

import classes from './Drawer.module.css';

function Drawer({ onHideDrawer }) {
  return (
    <Fragment>
      <Backdrop onClick={onHideDrawer} />
      <div className={`${classes.drawer}`}>
        <img src={CloseIcon} alt="close" onClick={onHideDrawer} />
        <NavLinks />
      </div>
    </Fragment>
  );
};

export default Drawer;