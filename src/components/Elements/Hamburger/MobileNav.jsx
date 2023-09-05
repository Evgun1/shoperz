import classes from './MobileNav.module.css';
import { uiActionMenu } from '../../../store/mobileMenu/ui-sliceMobile';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const MobileNav = (props) => {
    const dispatch = useDispatch();
    const btnClickClose = () => {
        dispatch(uiActionMenu.toggle());
    };

    const btClick = () => props.setShowSubMenu((prev) => !prev);

    return (
        <nav className={classes.category}>
            <button className={classes.btn} onClick={btClick}>
                Catalog
            </button>
        </nav>
    );
};

export default MobileNav;
