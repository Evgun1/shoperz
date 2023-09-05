import { useEffect, useState } from 'react';

import classes from './ShopFilter.module.css';
import { Link } from 'react-router-dom';

const ShopFilter = () => {
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
        <div className={classes.wraper}>
            {categoryData && categoryData.length && (
                <div className={classes.flex}>
                    <h3>Categories</h3>
                    <Link to={'/Shop'} className={classes.all}>
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

export default ShopFilter;
