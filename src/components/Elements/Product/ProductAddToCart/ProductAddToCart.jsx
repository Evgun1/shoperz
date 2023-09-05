import classes from './ProductAddToCart.module.css';

import subtract from '../../../../image/icons/Subtract.svg';
import compare from '../../../../image/icons/compare.svg';
import wishlist from '../../../../image/icons/wishlist.svg';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../store/cart/cart';

const DATA = [
    { text: 'Compare', img: { src: compare } },
    { text: 'Wishlist', img: { src: wishlist } },
];

const ProductAddToCart = ({ productID, price, stock }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
    }, [cart]);
    const [amount, setAmount] = useState(1);

    const buttonMinus = () => {
        if (amount > 0) {
            setAmount(amount - 1);
        }
    };
    const buttonPlus = () => {
        setAmount(amount + 1);
    };

    const formSubmit = (event) => {
        event.preventDefault();
        dispatch(addToCart({ productID, amount }));
    };

    return (
        <form onSubmit={formSubmit} className={classes.form} name="add-to-card">
            <input type="hidden" defaultValue={productID} name="productID" />
            <input type="hidden" name="amount" value={amount} />
            <div className={classes.spanStock}>
                <span className={classes.spanTitle}>Stock:</span>
                <span className={classes.spanText}>{stock}</span>
            </div>
            <div className={classes.buttonWrapper}>
                {DATA &&
                    DATA.length &&
                    DATA.map((data, index) => (
                        <button key={index} className={classes.button}>
                            {data.text} <img src={data.img.src} alt="" />
                        </button>
                    ))}
            </div>
            <h2 className={classes.price}>${price}</h2>
            <div className={classes.buttonAdd}>
                <button
                    className={classes.minuse}
                    type="button"
                    onClick={buttonMinus}
                >
                    -
                </button>
                <div>{amount}</div>
                <button
                    className={classes.pluse}
                    type="button"
                    onClick={buttonPlus}
                >
                    +
                </button>
            </div>
            <button className={classes.submit}>
                Add to Cart <img src={subtract} alt="" />
            </button>
        </form>
    );
};

export default ProductAddToCart;
