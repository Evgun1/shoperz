import { useEffect, useState } from 'react';

const useFetchProductsById = (productsArray, returnAmount = true) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            if (productsArray && productsArray.length) {
                const productsItems = await Promise.all(
                    productsArray.map(async (cartItem) => {
                        const response = await fetch(
                            'https://dummyjson.com/products/' +
                                cartItem.productID
                        );
                        if (!response.ok && response.status !== 200)
                            throw new Error(response.statusText);

                        const data = await response.json();
                        const output = returnAmount
                            ? {
                                  ...data,
                                  amount: cartItem.amount,
                              }
                            : data;

                        return output;
                    })
                );
                setProducts(productsItems);
            } else {
                setProducts(null);
            }
        };

        fetchProduct();
    }, [productsArray]);

    return products;
};

export default useFetchProductsById;
