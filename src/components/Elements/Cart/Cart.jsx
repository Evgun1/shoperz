import classes from './Cart.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import useFetchProductsById from '../../../hooks/useFetchProductsById';
import { toggle } from '../../../store/popup/popup';

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart.productsArray);
    const products = useFetchProductsById(cartProducts);
    const [cartTotal, setCartTotal] = useState();
    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(toggle(null));
    };

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

    return (
        <div className={classes.cart}>
            This is cart
            <div className={classes.product}>
                {products && products.length ? (
                    products.map((product, index) => (
                        <CartItem
                            key={index}
                            title={product.title}
                            price={product.price}
                            amount={product.amount}
                            thumbnail={product.thumbnail}
                            productID={product.id}
                        />
                    ))
                ) : (
                    <h2>Cart is Empty</h2>
                )}
            </div>
            <p>Cart total ${cartTotal}</p>
            <button onClick={toggleCartHandler}>Close</button>
        </div>
    );
};

export default Cart;
