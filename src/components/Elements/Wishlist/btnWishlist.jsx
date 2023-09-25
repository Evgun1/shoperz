import wishlist from '../../../image/icons/favorites.svg';
import { toggle } from '../../../store/popup/popup';

import { useDispatch } from 'react-redux';
import Wishlist from './Wishlist';

const BtnWishlist = () => {
    const distpatch = useDispatch();
    const toggleWishlistHandler = () => {
        distpatch(toggle(<Wishlist/>));
    };
    return (
        <button onClick={toggleWishlistHandler}>
            <img src={wishlist} alt="" />
        </button>
    );
};

export default BtnWishlist;
