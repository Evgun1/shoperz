import classes from './SpeedDial.module.css';

import Compare from '../../../image/icons/compare.svg';
import Wishist from '../../../image/icons/wishlist.svg';
import Cart from '../../../image/icons/cart.svg';

import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cart/cart';
import { addToWishlist } from '../../../store/wishlist/wishlist';

const BTN = [
    {
        lable: 'Compare',
        img: {
            src: Compare,
            alt: 'Compare',
        },
    },
    {
        lable: 'Wishlist',
        img: {
            src: Wishist,
            alt: 'Wishist',
        },
    },
    {
        lable: 'Cart',
        img: {
            src: Cart,
            alt: 'Cart',
        },
    },
];

const SpeedDial = ({ id }) => {
    const [selected, setSelected] = useState(false);
    const [btnLabel, setBtnLabel] = useState('Open');
    // const wrapperRef = useRef();
    const dispatch = useDispatch();

    const btClickHandler = () => setSelected((prev) => !prev);

    const actionBtnClik = (label) => {
        if (label === 'Cart') {
            dispatch(addToCart({ productID: id, amount: 1 }));
        }
        if (label === 'Wishlist') {
            dispatch(addToWishlist({ productID: id }));
        }
    };

    const documentClickHandler = (event) => {
        // console.log(event.target);
    };

    useEffect(() => setBtnLabel(selected ? 'Close' : 'Open'), [selected]);

    useEffect(() => {
        document.addEventListener('click', documentClickHandler);
        return () => {
            document.removeEventListener('click', documentClickHandler);
        };
    }, []);

    return (
        <div
            className={classes.wrapper}
            // ref={wrapperRef}
        >
            <div className={classes.btnOpen}>
                {selected && (
                    <div className={classes.list}>
                        {BTN &&
                            BTN.length &&
                            BTN.map((data, index) => (
                                <button
                                    onClick={() => actionBtnClik(data.lable)}
                                    key={index}
                                    className={classes.btn}
                                >
                                    <img src={data.img.src} alt="" />
                                </button>
                            ))}
                    </div>
                )}
                <button onClick={btClickHandler} className={classes.btnMain}>
                    {btnLabel}
                </button>
            </div>
        </div>
    );
};

export default SpeedDial;
