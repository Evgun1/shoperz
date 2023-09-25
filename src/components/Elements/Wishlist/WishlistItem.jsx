import { useDispatch } from 'react-redux';
import classes from './WishlistItem.module.css';
import { removeFromWishlist } from '../../../store/wishlist/wishlist';

const WishlistItem = ({ id, title, price, thumbnail }) => {
    const dispatch = useDispatch();

    const btnClickHandler = () => {
        dispatch(removeFromWishlist(id));
    };

    return (
        <div className={classes.product}>
            <img src={thumbnail} alt="" />
            <h2>{title}</h2>
            <p>Price ${price}</p>
            <button onClick={btnClickHandler}>Remoute</button>
        </div>
    );
};

export default WishlistItem;
