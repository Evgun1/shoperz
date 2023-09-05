import Cart from '../../../image/icons/cart.svg';

import classes from './CartButton.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../../store/cart/ui-slice';

const CartBotton = () => {
    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(uiAction.toggle());
    };

    const cartAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <img className={classes.img} src={Cart} alt="" />
            <span>{cartAmount}</span>
        </button>
    );
};

export default CartBotton;
