import { Link } from 'react-router-dom';

import classes from './ProductCategory.module.css';

const ProductCategory = ({ productData }) => {
    return (
        <div className={classes.wraper}>
            <div className={classes.title}>
                <h2>Category</h2>
            </div>
            <div className={classes.grid}>
                {productData &&
                    productData.products.length &&
                    productData.products.map((product, index) => (
                        <Link
                            key={index}
                            to={`/product/${product.id}`}
                            className={classes.link}
                        >
                            <img
                                className={classes.img}
                                src={product.thumbnail}
                                alt=""
                            />
                            <div className={classes.info}>
                                <span>{product.category}</span>
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default ProductCategory;
