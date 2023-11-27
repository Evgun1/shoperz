import { useEffect, useState } from 'react';
import classes from './ShopProduct.module.css';
import ProductCard from '../../../Layouts/ProductCard/ProductCard';
import { Pagination } from '@mui/material';
import { useHref, useNavigate, useSearchParams } from 'react-router-dom';

const ShopProduct = () => {
    const [products, setProducts] = useState();
    const navigate = useNavigate();
    const href = useHref();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const page = searchParams.get('page');
        const skip = page && page !== 1 ? 12 * (page - 1) : 0;
        fetch(`https://dummyjson.com/products?limit=12&skip=${skip}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [searchParams]);

    const handlerChange = (e, page) => {
        navigate(`${href}?page=${page}`);
    };

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
            {products && products.products && (
                <Pagination
                    onChange={handlerChange}
                    count={Math.ceil(products.total / 12)}
                />
            )}
        </div>
    );
};

export default ShopProduct;
