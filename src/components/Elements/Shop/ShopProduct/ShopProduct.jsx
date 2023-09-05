import { useEffect, useState } from 'react';
import classes from './ShopProduct.module.css';
import ProductCard from '../../../Layouts/ProductCard/ProductCard';

const ShopProduct = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <div className={classes.title}>
                <h2 style={{ textTransform: 'capitalize' }}>Shop</h2>
            </div>
            {products && products.products ? (
                <div className={classes.grid}>
                    {products.products.map((product, index) => (
                        <ProductCard
                            key={index}
                            id={product.id}
                            category={product.category}
                            images={product.images}
                            price={product.price}
                            salePrice={product.salePrice}
                            showSalePrice={product.showSalePrice}
                            title={product.title}
                        />
                    ))}
                </div>
            ) : (
                <h1>Products was not found</h1>
            )}
        </div>
    );
};

export default ShopProduct;
