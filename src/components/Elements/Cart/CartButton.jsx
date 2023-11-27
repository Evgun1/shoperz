import cart from '../../../image/icons/cart.svg';

import classes from './CartButton.module.css';
import Cart from './Cart';
import MiniCart from './Minicart';

import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../../store/popup/popup';
import useFetchProductsById from '../../../hooks/useFetchProductsById';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import AnimateHeight from 'react-animate-height';

const CartBotton = () => {
    const dispatch = useDispatch();
    const [cartTotal, setCartTotal] = useState();
    // const [selected, setSelected] = useState(false);
    const [height, setHeight] = useState(0);
    const wrapperRef = useRef();
    const timeoutID = useRef(null);

    const cartProducts = useSelector((state) => state.cart.productsArray);
    const cartAmount = useSelector((state) => state.cart.totalAmount);
    const products = useFetchProductsById(cartProducts);

    useEffect(() => {
        let total = 0;
        if (products) {
            products.forEach((product) => {
                total += product.price * product.amount;
            });
        } else {
            total = 0;
        }
        setCartTotal(total);
    }, [products]);

    const onMouseHandler = () => {
        if (timeoutID.current) clearTimeout(timeoutID.current);
        new Promise((resolve) => {
            timeoutID.current = setTimeout(resolve, 500);
        }).then(() => {
            if (height === 0) {
                setHeight('auto');
            }
        });
    };

    const onMouseLeave = () => {
        setHeight(0);
        if (timeoutID.current) clearTimeout(timeoutID.current);
    };

    useEffect(() => {
        wrapperRef.current.addEventListener('mouseover', onMouseHandler);
        wrapperRef.current.addEventListener('mouseleave', onMouseLeave);

        return () => {
            wrapperRef.current.removeEventListener('mouseover', onMouseHandler);
            wrapperRef.current.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    const toggleCartHandler = () => {
        dispatch(toggle(<Cart />));
    };

    return (
        <div
            ref={wrapperRef}
            className={classes.wrapper}
            // onMouseEnter={onMouseHandler}
            // onMouseLeave={onMouseHandler}
        >
            <button className={classes.button} onClick={toggleCartHandler}>
                <img className={classes.img} src={cart} alt="" />
                {cartAmount ? <span>{cartAmount}</span> : null}
                <p> $ {parseFloat(cartTotal).toFixed(2)}</p>
            </button>

            {products && products.length && (
                <AnimateHeight
                    duration={500}
                    height={height}
                    className={classes.animate}
                >
                    <div className={classes.wrapperProduct}>
                        {products.map((product, index) => (
                            <MiniCart
                                key={index}
                                productID={product.id}
                                thumbnail={product.thumbnail}
                                title={product.title}
                                price={product.price}
                                amount={product.amount}
                            />
                        ))}
                    </div>
                </AnimateHeight>
            )}
        </div>
    );
};

export default CartBotton;
