import classes from './Overlay.module.css';

import { createPortal } from 'react-dom';
import Cart from './Cart';
import { useDispatch } from 'react-redux';
import { uiAction } from '../../../store/cart/ui-slice';

const CartPopup = () => {
    return (
        <>
            {createPortal(<Cart />, document.getElementById('portal'))},
            {createPortal(<Overlay />, document.getElementById('overlay'))}
        </>
    );
};
export default CartPopup;

const Overlay = () => {
    const dispatch = useDispatch();
    const toggleCartHandler = () => {
        dispatch(uiAction.toggle());
    };

    return <div className={classes.overlay} onClick={toggleCartHandler}></div>;
};
