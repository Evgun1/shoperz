import classes from './MobileSubMenu.module.css';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { uiActionMenu } from '../../../store/mobileMenu/ui-sliceMobile';

const MobileSubMenu = (props) => {
    const [category, setCategory] = useState();

    const dispatch = useDispatch();
    const btnClickClose = () => {
        dispatch(uiActionMenu.toggle());
    };

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                const categories = data.map((item) => {
                    return {
                        to: `/category/${item}`,
                        label: item.replace('-', ' '),
                    };
                });
                setCategory(categories);
            });
    }, []);
    useEffect(() => console.log(category), [category]);

    const btClick = () => props.setShowSubMenu(false);

    return (
        <div>
            <button className={classes.btn} onClick={btClick}>
                Back
            </button>
            {category && category.length && (
                <ul className={classes.category}>
                    <li>
                        <NavLink
                            className={classes.link}
                            to={'/shop'}
                            onClick={btnClickClose}
                        >
                            Shop
                        </NavLink>
                    </li>
                    {category.map((data, index) => (
                        <li key={index}>
                            <NavLink
                                className={classes.link}
                                to={data.to}
                                onClick={btnClickClose}
                            >
                                {data.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MobileSubMenu;
