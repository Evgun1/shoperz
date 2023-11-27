import wishlist from '../../../image/icons/favorites.svg';
import classes from './WishlistButton.module.css';

import { toggle } from '../../../store/popup/popup';
import { useDispatch, useSelector } from 'react-redux';
import Wishlist from './Wishlist';

const WishlistButton = () => {
    const distpatch = useDispatch();
    const toggleWishlistHandler = () => {
        distpatch(toggle(<Wishlist />));
    };

    const amount = useSelector((state) => state.wishlist.productsArray.length);
    return (
        <button className={classes.btn} onClick={toggleWishlistHandler}>
            <img src={wishlist} alt="" />
            {amount ? <span>{amount}</span> : null}
        </button>
    );
};

export default WishlistButton;
