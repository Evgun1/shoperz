import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {
    cartSlice,
    changeAmount,
    remoteToCart,
} from '../../../store/cart/cart';

const CartItem = ({ title, price, amount, thumbnail, productID }) => {
    const dispatch = useDispatch();
    const removeBtnClick = () => {
        dispatch(remoteToCart(productID));
    };
    const btnOnClickMinus = () => {
        dispatch(
            cartSlice.actions.changeAmount({ productID, amount: amount - 1 })
        );
    };
    const btnOnClickPlus = () => {
        dispatch(
            cartSlice.actions.changeAmount({ productID, amount: amount + 1 })
        );
    };
    return (
        <div className={classes.product}>
            <img src={thumbnail} alt="" />
            <h2>{title}</h2>
            <p>Price ${price}</p>
            <div>
                <p>Amount</p>
                <div className={classes.amount}>
                    <button onClick={btnOnClickMinus}>-</button>
                    <p> {amount}</p>
                    <button onClick={btnOnClickPlus}>+</button>
                </div>
            </div>
            <p>Subtotal ${price * amount}</p>
            <button onClick={removeBtnClick}>Remoute</button>
        </div>
    );
};
export default CartItem;
