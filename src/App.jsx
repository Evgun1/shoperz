import './App.css';
import Header from './components/Elements/Header/Header';
import Footer from './components/Elements/Footer/Footer';
import CartPopup from './components/Elements/Cart/CartPopup';
import HamburgerPopup from './components/Elements/Hamburger/HamburgerPopup';

import { Outlet, useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFromLocalStorage } from './store/cart/cart';
import { responsiveActions } from './store/responsive';

function App() {
    const product = useLoaderData();

    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const showMobileMenu = useSelector(
        (state) => state.uiMobileMenu.menuIsVisible
    );

    const dispatch = useDispatch();

    const windowResizeHandler = () => dispatch(responsiveActions.update());

    useEffect(() => {
        dispatch(fetchFromLocalStorage());
        dispatch(responsiveActions.init());

        window.addEventListener('resize', windowResizeHandler);

        return () => {
            window.removeEventListener('resize', windowResizeHandler);
        };
    }, []);

    useEffect(()=>{
        document.body.classList.toggle('popup-is-open', showCart || showMobileMenu)
    }, [showCart, showMobileMenu])

    return (
        <>
            <Header />
            <main>
                {showMobileMenu && <HamburgerPopup />}
                {showCart && <CartPopup />}
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;
