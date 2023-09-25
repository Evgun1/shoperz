import './App.css';
import Header from './components/Elements/Header/Header';
import Footer from './components/Elements/Footer/Footer';

import { Outlet, useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFromLocalStorage } from './store/cart/cart';
import { responsiveActions } from './store/responsive';

import { fetchWishList } from './store/wishlist/actions';
import Popup from './components/Layouts/Popup/Popup';

function App() {
    // const product = useLoaderData();

    const popupContent = useSelector((state) => state.popup.popupContent);

    const dispatch = useDispatch();

    const windowResizeHandler = () => dispatch(responsiveActions.update());

    useEffect(() => {
        window.addEventListener('resize', windowResizeHandler);

        return () => {
            window.removeEventListener('resize', windowResizeHandler);
        };
    }, []);

    useEffect(() => {
        dispatch(fetchFromLocalStorage());
        dispatch(responsiveActions.init());
        dispatch(fetchWishList());
    }, [dispatch]);

    return (
        <>
            <Header />
            <main>
                {popupContent && <Popup>{popupContent}</Popup>}
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;
