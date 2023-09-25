import cart from '../../../image/icons/cart.svg';

import classes from './CartButton.module.css';
import Cart from './Cart';

import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../../store/popup/popup';

const CartBotton = () => {
    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(toggle(<Cart />));
    };

    const cartAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <img className={classes.img} src={cart} alt="" />
            <span>{cartAmount}</span>
        </button>
    );
};

export default CartBotton;
