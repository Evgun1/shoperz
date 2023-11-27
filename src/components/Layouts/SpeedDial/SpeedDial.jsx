import classes from './SpeedDial.module.css';

import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/cart/cart';
import { addToWishlist } from '../../../store/wishlist/wishlist';
import { current } from '@reduxjs/toolkit';

const BTN = [
    {
        lable: 'Compare',
        img: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M13.8747 3.23534C14.0049 3.10517 14.0049 2.89411 13.8747 2.76394L12.0128 0.90201C11.8028 0.692022 11.4437 0.840744 11.4437 1.13771V2.33301H9.44479V2.33309C8.5972 2.3332 7.82353 2.64966 7.23541 3.17082C7.52458 3.5326 7.75227 3.94569 7.90262 4.39423C8.26935 3.94985 8.8243 3.66655 9.44542 3.66639V3.66634H11.4437V4.86157C11.4437 5.15854 11.8028 5.30726 12.0128 5.09727L13.8747 3.23534ZM13.8747 11.2353C14.0049 11.1052 14.0049 10.8941 13.8747 10.7639L12.0128 8.90201C11.8028 8.69202 11.4437 8.84074 11.4437 9.13771V10.333H9.44479V10.333C8.34082 10.3323 7.44609 9.43711 7.44609 8.33297L7.44375 8.33297V5.66634V5.66631C7.44373 3.82555 5.95162 2.33328 4.11092 2.33301V2.33294H1.44425C1.07606 2.33294 0.777588 2.63142 0.777588 2.99961C0.777588 3.3678 1.07606 3.66627 1.44425 3.66627H4.11041V3.66634C5.21499 3.66634 6.11041 4.56177 6.11041 5.66634L6.11041 8.33297L6.11146 8.33297V8.33303H6.11002C6.11002 8.56134 6.13297 8.78429 6.1767 8.9997C6.27664 9.49207 6.48512 9.94503 6.77606 10.3325L6.7768 10.3315C7.38487 11.142 8.3536 11.6663 9.44479 11.6663V11.6663H11.4437V12.8616C11.4437 13.1585 11.8028 13.3073 12.0128 13.0973L13.8747 11.2353ZM0.777588 10.9996C0.777588 10.6314 1.07606 10.3329 1.44425 10.3329H4.10818V10.3329H4.10841C4.72899 10.3329 5.28354 10.0502 5.65038 9.60665C5.80085 10.0549 6.02856 10.4678 6.3177 10.8293C5.73006 11.3496 4.95739 11.6656 4.11092 11.6661V11.6663H1.44425C1.07606 11.6663 0.777588 11.3678 0.777588 10.9996ZM4.109 4.99939L4.07637 4.99955H4.10818V6.33286H4.10841L4.10965 6.33286V4.99957H4.14407L4.109 4.99939ZM9.44523 8.99976H9.44542V7.66639H9.445V8.99976L9.44523 8.99976Z" fill="currentColor"/></svg>',
    },
    {
        lable: 'Wishlist',
        img: '<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Union" d="M2.01456 1.17252C0.606149 2.58093 0.606149 4.86443 2.01456 6.27285L7.62492 11.8832L13.2353 6.27285C14.6437 4.86443 14.6437 2.58093 13.2353 1.17252C11.8269 -0.235892 9.54336 -0.235892 8.13495 1.17252L7.62492 1.68255L7.11489 1.17252C5.70648 -0.235892 3.42297 -0.235892 2.01456 1.17252Z" fill="currentColor"/></svg>',
    },
    {
        lable: 'Cart',
        img: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8325 10.8337V10.8337H9.33618C8.90353 10.8337 8.54284 11.1648 8.5059 11.5959L7.57732 22.4292C7.53562 22.9158 7.9193 23.3337 8.40761 23.3337H21.592C22.0803 23.3337 22.464 22.9158 22.4223 22.4292L21.4937 11.5959C21.4567 11.1648 21.0961 10.8337 20.6634 10.8337H19.1658V10.8337C19.1658 8.53247 17.3003 6.66699 14.9991 6.66699C12.698 6.66699 10.8325 8.53247 10.8325 10.8337ZM12.4991 10.8337V10.8337H17.4991V10.8337C17.4991 9.45295 16.3799 8.33366 14.9991 8.33366C13.6184 8.33366 12.4991 9.45295 12.4991 10.8337ZM14.9979 17.5003C17.2816 17.5003 19.1361 15.6631 19.1642 13.386C19.1653 13.3687 19.1658 13.3513 19.1658 13.3337C19.1658 12.8734 18.7927 12.5003 18.3325 12.5003C17.8722 12.5003 17.4992 12.8734 17.4992 13.3337V13.3337H17.4979C17.4978 14.7144 16.3785 15.8337 14.9979 15.8337C13.6307 15.8337 12.5199 14.7363 12.4982 13.3743C12.4988 13.3608 12.4992 13.3473 12.4992 13.3337C12.4992 12.8734 12.1261 12.5003 11.6658 12.5003C11.2056 12.5003 10.8325 12.8734 10.8325 13.3337V13.3337H10.8318V13.2594C10.8314 13.2841 10.8312 13.3089 10.8312 13.3337C10.8312 15.6348 12.6967 17.5003 14.9979 17.5003Z" fill="currentColor"/></svg>',
    },
];

const SpeedDial = ({ id }) => {
    const [selected, setSelected] = useState(false);
    const [btnLabel, setBtnLabel] = useState('Open');
    const wishlist = useSelector((state) => state.wishlist.productsArray);
    const dispatch = useDispatch();
    const buttonRef = useRef();
    const wrapperRef = useRef();

    const actionBtnClik = (label) => {
        if (label === 'Cart') {
            dispatch(addToCart({ productID: id, amount: 1 }));
        }
        if (label === 'Wishlist') {
            dispatch(addToWishlist({ productID: id }));
        }
    };
    /**
     *
     * @param {PointerEvent} event
     * @returns
     */
    const documentClickHandler = (event) => {
        if (wrapperRef.current) {
            const selector = '.' + wrapperRef.current.className;
            const currentWrapper = event.target.closest(selector);
            if (currentWrapper) return;
        }

        const isCurrentBtn = event.target === buttonRef.current;

        if (isCurrentBtn) {
            setSelected((prev) => !prev);
        } else {
            setSelected((prev) => (prev ? !prev : prev));
        }
    };

    useEffect(() => setBtnLabel(selected ? 'Close' : 'Open'), [selected]);

    useEffect(() => {
        document.addEventListener('click', documentClickHandler);
        return () => {
            document.removeEventListener('click', documentClickHandler);
        };
    }, []);

    const btnClasses = (label) => {
        let output = classes.btn;
        if (label !== 'Wishlist') {
            return output;
        }
        const product = wishlist.find((product) => product.productID === id);

        output += product ? ` ${classes.btnActive}` : '';
        return output;
    };

    return (
        <div className={classes.wrapper}>
            {selected && (
                <div className={classes.list} ref={wrapperRef}>
                    {BTN &&
                        BTN.length &&
                        BTN.map((data, index) => (
                            <button
                                onClick={() => actionBtnClik(data.lable)}
                                key={index}
                                className={btnClasses(data.lable)}
                            >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data.img,
                                    }}
                                ></div>
                            </button>
                        ))}
                </div>
            )}
            <button
                ref={buttonRef}
                // onClick={btClickHandler}
                className={classes.btnMain}
            >
                {btnLabel}
            </button>
        </div>
    );
};

export default SpeedDial;
