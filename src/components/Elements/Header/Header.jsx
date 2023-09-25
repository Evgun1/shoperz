import HeaderTop from './HeaderTop/HeaderTop';
import HeaderNav from './HeaderNav/HeaderNav';
import classes from './Header.module.css';
import SearchForm from './SearchForm/SearchForm';
import { Link } from 'react-router-dom';

import Logo from '../../../image/Logo.svg';
import Profiler from '../../../image//icons/profile.svg';
import Shuffle from '../../../image/icons/shuffle.svg';
import Wishlist from '../../../image/icons/favorites.svg';
import Cart from '../../../image/icons/cart.svg';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CartBotton from '../Cart/CartButton';
import BtnWishlist from '../Wishlist/btnWishlist';
import HamburgerBtn from '../Hamburger/HamburgerBtn';
import BtnProfile from '../Profile/BtnProfile';

const DATA = [
    { src: Profiler, alt: '' },
    { src: Shuffle, alt: '' },
    { src: Wishlist, alt: '' },
];

const Header = () => {
    const { isTablet, isDesktop } = useSelector((state) => state.responsive);

    // console.log(responsive);
    return (
        <header className={classes.header}>
            <HeaderTop />
            <div className={classes.frame}>
                <div className="container">
                    <div className={classes.flex}>
                        <div
                            className={`${classes['grid__left']} ${classes.logo}`}
                        >
                            <HamburgerBtn />
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        <div>{isTablet || (isDesktop && <SearchForm />)}</div>
                        <div className={classes['grid__right']}>
                            <BtnProfile />
                            <BtnWishlist />
                            <CartBotton />
                        </div>
                    </div>
                </div>
            </div>
            <HeaderNav />
        </header>
    );
};

export default Header;
