import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const modalPortal = document.getElementById('modal-root');
const backdropPortal = document.getElementById('backdrop-root');

function ModalPopup({ children }) {
  return (
    <div className={classes['modal-popup']}>
      {children}
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        backdropPortal
      )}
      {ReactDOM.createPortal(
        <ModalPopup>{children}</ModalPopup>,
        modalPortal
      )}
    </React.Fragment>
  );
}

export default Modal;
