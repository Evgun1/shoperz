import Subtract from '../../../../image/icons/Subtract.svg';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './FooterCategory.module.css';
import SpeedDial from '../../../Layouts/SpeedDial/SpeedDial';

const array = [
    { title: 'Smartphone', category: 'smartphones' },
    { title: 'Laptop', category: 'laptops' },
    { title: 'Fragrance', category: 'fragrances' },
];

const FooterCategory = () => {
    return (
        <div className={classes.wraper}>
            <div className={`container ${classes.container}`}>
                {array.map((column, index) => (
                    <Column
                        title={column.title}
                        category={column.category}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

const Column = ({ title, category }) => {
    const [categorys, setCategorys] = useState();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}?limit=3`)
            .then((res) => res.json())
            .then((json) => {
                setCategorys(json);
            });
    }, []);

    return (
        <div className={classes.productWraper}>
            <div className={classes.mainTitle}>
                <h2>{title}</h2>
            </div>
            {categorys &&
                categorys.products.length &&
                categorys.products.map((product, index) => (
                    <div key={index} className={classes.product}>
                        <img src={product.images[0]} alt="" />
                        <div className={classes.info}>
                            <Link
                                to={`/product/${product.id}`}
                                className={classes.title}
                            >
                                {product.title}
                            </Link>
                            <div className={classes.rating}>
                                {product.rating}
                            </div>
                            <div className={classes.price}>
                                <p>${product.price}</p>
                                {/* <button className={classes.button}>
                                    <img src={Subtract} alt="" />
                                </button> */}

                                <SpeedDial id={product.id} />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default FooterCategory;
