import Hamburger from './Hamburger';

import classes from './HamburgerPopup.module.css';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { uiActionMenu } from '../../../store/mobileMenu/ui-sliceMobile';

const HamburgerPopup = () => {
    return (
        <>
            {createPortal(
                <Hamburger />,
                document.getElementById('portalMobileMenu')
            )}
            ,{createPortal(<Overlay />, document.getElementById('overlay'))}
        </>
    );
};

export default HamburgerPopup;

const Overlay = () => {
    const dispatch = useDispatch();
    const toggleMobileMenu = () => {
        dispatch(uiActionMenu.toggle());
    };
    return <div className={classes.overlay} onClick={toggleMobileMenu}></div>;
};
