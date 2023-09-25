import classes from './Popup.module.css';

import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../store/popup/popup';
import { useEffect } from 'react';

const Popup = (props) => {
    useEffect(() => {
        document.body.classList.add('popup-is-open');
        return () => {
            document.body.classList.remove('popup-is-open');
        };
    }, []);
    return (
        <>
            {createPortal(props.children, document.getElementById('popup'))}
            {createPortal(<Overlay />, document.getElementById('overlay'))}
        </>
    );
};

const Overlay = () => {
    const dispatch = useDispatch();
    const togglePopupHandler = () => {
        dispatch(toggle(null));
    };

    return <div className={classes.overlay} onClick={togglePopupHandler}></div>;
};

export default Popup;
