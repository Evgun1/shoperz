import classes from './Category.module.css';
import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import ProductCard from '../../Layouts/ProductCard/ProductCard';

const Category = () => {
    const { slug } = useParams();
    const products = useLoaderData();

    return (
        <section className={classes.wrapper}>
            <div className="container">
                <div className={classes.mainGrid}>
                    <Filters />
                    <div>
                        <div className={classes.categoryTitle}>
                            <h2 style={{ textTransform: 'capitalize' }}>
                                {slug.replace('-', ' ')}
                            </h2>
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
                </div>
            </div>
        </section>
    );
};

const Filters = () => {
    const [categoryData, setCategoryData] = useState([]);

    const fetchCategoryData = () => {
        fetch('https://dummyjson.com/products/categories')
            .then((responsse) => {
                return responsse.json();
            })
            .then((data) => {
                setCategoryData(data);
            });
    };

    useEffect(() => {
        fetchCategoryData();
    }, []);

    return (
        <div className={classes.wrapperFilter}>
            {categoryData && categoryData.length && (
                <div className={classes.categoryFlex}>
                    <h3>Categories</h3>
                    <Link to={'/shop'} className={classes.all}>
                        All
                    </Link>
                    {categoryData.map((category, index) => (
                        <Link
                            to={`/category/${category}`}
                            className={classes.link}
                            key={index}
                        >
                            {category}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Category;
