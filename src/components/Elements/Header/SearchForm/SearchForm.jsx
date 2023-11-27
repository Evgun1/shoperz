import { useDispatch, useSelector } from 'react-redux';
import classes from '../Header.module.css';

import searchImg from './search.svg';
import { useEffect, useRef, useState } from 'react';
import { searchProducts } from '../../../../store/search/actions';
import { Link } from 'react-router-dom';

const SearchForm = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const dispatch = useDispatch();
    const search = useSelector((state) => state.search);

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then((responsse) => {
                return responsse.json();
            })
            .then((data) => {
                setCategoryData(data);
            });
    }, []);

    const changeHandler = (event) => {
        console.log('оновлення поля форми');
        setValue(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(searchProducts(value));
        setIsTouched(true);
    };

    const documentClickHandler = (event) => {
        const component = event.target.closest('#search-form');
        if (!component) setIsTouched(false);
    };

    useEffect(() => {
        document.addEventListener('click', documentClickHandler);
        return () => {
            document.removeEventListener('click', documentClickHandler);
        };
    }, []);
    return (
        <div className={classes.wrapper} id="search-form">
            <form
                action=""
                className={`${classes.from} ${classes['grid__medium']}`}
                onSubmit={submitHandler}
            >
                <input
                    type="text"
                    className={classes.search}
                    name="productName"
                    onChange={changeHandler}
                    autoComplete="off"
                />

                {/* {categoryData.length > 0 && (
                    <div className={classes.div}>
                        <select
                            id=""
                            className={classes.select}
                            defaultValue={'all'}
                            name="productCategory"
                        >
                            <option value="all">All Categories</option>
                            {categoryData.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                )} */}
                <button type="submit" className={classes.button}>
                    <img
                        className={classes.img_button}
                        src={searchImg}
                        alt=""
                    />
                </button>
            </form>
            {isTouched && value.length ? (
                <div className={classes.searchResult}>
                    {search.arrayProducts && search.arrayProducts.length ? (
                        <ul className={classes.list}>
                            {search.arrayProducts.map((product, index) => (
                                <li key={index}>
                                    <Link to={`/product/${product.id}`}>
                                        {product.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h2>Products was not found</h2>
                    )}
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default SearchForm;
