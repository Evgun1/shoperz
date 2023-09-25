import MobileNav from './MobileNav';
import MobileSubMenu from './MobileSubMenu';
import SearchForm from '../Header/SearchForm/SearchForm';

import classes from './Hamburger.module.css';

import { SET, MENU, MEDIA } from '../../../data/data';
import { toggle } from '../../../store/popup/popup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';

const Hamburger = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [pageCoord, setPageCoods] = useState(null);
    const dispatch = useDispatch();

    const menuTouchStart = (event) => {
        setPageCoods(() => {
            return {
                pageX: event.changedTouches[0].pageX,
                pageY: event.changedTouches[0].pageY,
            };
        });
    };

    const menuTouchEnd = (event) => {
        const endCoods = {
            pageX: event.changedTouches[0].pageX,
            pageY: event.changedTouches[0].pageY,
        };

        const dif = {
            x: pageCoord.pageX - endCoods.pageX,
            y: Math.abs(pageCoord.pageY - endCoods.pageY),
        };

        if (dif.x <= 0 || dif.y > dif.x) {
            return;
        }

        dispatch(toggle(null));
    };

    return (
        <div
            className={classes.wrapper}
            onTouchStart={menuTouchStart}
            onTouchEnd={menuTouchEnd}
        >
            {showSubMenu ? (
                <MobileSubMenu setShowSubMenu={setShowSubMenu} />
            ) : (
                <div>
                    <div className={classes.change}>
                        {SET &&
                            SET.length &&
                            SET.map((data, index) => (
                                <Select
                                    key={index}
                                    options={data.options}
                                    placeholder={data.label}
                                    classNames={{
                                        control: () => 'my-select__controll',
                                        valueContainer: () =>
                                            'my-select__value-container',
                                    }}
                                />
                                // <button key={index} className={classes.img}>
                                //     <img src={data.img.src} alt="" />
                                //     <p>{data.text}</p>
                                // </button>
                            ))}
                    </div>
                    <SearchForm />
                    <MobileNav setShowSubMenu={setShowSubMenu} />
                    <ul className={classes.menu}>
                        {MENU &&
                            MENU.length &&
                            MENU.map((data, index) => (
                                <li key={index}>
                                    <NavLink className={classes.link}>
                                        <img
                                            src={data.img.src}
                                            alt=""
                                            className={classes.img}
                                        />
                                        <p>{data.text}</p>
                                    </NavLink>
                                </li>
                            ))}
                    </ul>
                    <ul className={classes.media}>
                        {MEDIA &&
                            MEDIA.length &&
                            MEDIA.map((data, index) => (
                                <li key={index}>
                                    <NavLink className={classes.link}>
                                        <img
                                            src={data.img.src}
                                            alt=""
                                            className={classes.img}
                                        />
                                    </NavLink>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default Hamburger;
