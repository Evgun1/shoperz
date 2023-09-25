import classes from './Wishlist.module.css';

import { useDispatch, useSelector } from 'react-redux';

import useFetchProductsById from '../../../hooks/useFetchProductsById';
import WishlistItem from './WishlistItem';
import { toggle } from '../../../store/popup/popup';

const Wishlist = () => {
    const dispatch = useDispatch();

    const wishlist = useSelector((state) => state.wishlist.productsArray);
    const products = useFetchProductsById(wishlist, false);

    const toggleWishlistHandler = () => {
        dispatch(toggle(null));
    };

    return (
        <div className={classes.wishlist}>
            This is Wishlist
            <div className={classes.product}>
                {products && products.length ? (
                    products.map((product, index) => (
                        <WishlistItem
                            key={index}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            thumbnail={product.thumbnail}
                        />
                    ))
                ) : (
                    <h2>Wishlist is Empty</h2>
                )}
            </div>
            <button onClick={toggleWishlistHandler}>Close</button>
        </div>
    );
};

export default Wishlist;
