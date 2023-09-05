import { useLoaderData } from 'react-router-dom';

import classes from './Product.module.css';
import ProductGallery from '../../Elements/Product/ProductGallery/ProductGallery';
import ProductInfo from '../../Elements/Product/ProductInfo/ProductInfo';
import ProductAddToCart from '../../Elements/Product/ProductAddToCart/ProductAddToCart';
import ProductCategory from '../../Elements/Product/ProductCategory/ProductCategory';

const Product = () => {
    const { product, productData } = useLoaderData();

    return (
        <section className={classes.wraperProduct}>
            <div className="container">
                <div className={classes.grid}>
                    <ProductGallery images={product.images} />
                    <ProductInfo
                        category={product.category}
                        brand={product.brand}
                        description={product.description}
                        rating={product.rating}
                        title={product.title}
                    />
                    <ProductAddToCart
                        productID={product.id}
                        price={product.price}
                        stock={product.stock}
                    />
                </div>
            </div>
            <div className={classes.wraperCategory}>
                <div className="container">
                    <ProductCategory productData={productData} />
                </div>
            </div>
        </section>
    );
};

export default Product;
