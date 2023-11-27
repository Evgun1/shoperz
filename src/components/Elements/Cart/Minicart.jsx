import classes from './MiniCart.module.css';

import { useDispatch } from 'react-redux';
import { remoteToCart } from '../../../store/cart/cart';

const MiniCart = ({ thumbnail, title, price, amount, productID }) => {
    const dispatch = useDispatch();

    const btnClick = () => {
        dispatch(remoteToCart(productID));
    };
    return (
        <div className={classes.product}>
            <img src={thumbnail} alt="" />
            <div className={classes.midleColumn}>
                <h3>{title}</h3>
                <p>{amount}</p>
            </div>
            <div className={classes.rightColumn}>
                <button onClick={btnClick} className={classes.btn}></button>
                <p>${price * amount}</p>
            </div>
        </div>
    );
};

export default MiniCart;
