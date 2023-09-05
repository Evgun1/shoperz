import classes from './Cart.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../../store/cart/ui-slice';
import { remoteToCart } from '../../../store/cart/cart';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart.productsArray);
    const [products, setProducts] = useState([]);
    const [cartTotal, setCartTotal] = useState();
    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(uiAction.toggle());
    };

    useEffect(() => {
        const fetchProduct = async () => {
            if (cartProducts && cartProducts.length) {
                const productsItems = await Promise.all(
                    cartProducts.map(async (cartItem) => {
                        const response = await fetch(
                            'https://dummyjson.com/products/' +
                                cartItem.productID
                        );
                        if (!response.ok && response.status !== 200)
                            throw new Error(response.statusText);

                        const data = await response.json();

                        return {
                            ...data,
                            amount: cartItem.amount,
                        };
                    })
                );
                setProducts(productsItems);
            } else {
                setProducts(null);
            }
        };

        fetchProduct();
    }, [cartProducts]);

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
            this is cart
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
