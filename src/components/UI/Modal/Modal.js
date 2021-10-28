import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const portalElement = document.getElementById('modal-root');

function ModalPopup({ children }) {
  return <div className={classes['modal-popup']}>{children}</div>;
}

function Modal({ children, onClose }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalPopup>{children}</ModalPopup>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
