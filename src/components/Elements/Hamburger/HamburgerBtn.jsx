import { useDispatch } from 'react-redux';
import classes from './HamburgerBtn.module.css';
import { uiActionMenu } from '../../../store/mobileMenu/ui-sliceMobile';

const HamburgerBtn = () => {
    const dispatch = useDispatch();
    const toggleMobileMenu = () => {
        dispatch(uiActionMenu.toggle());
    };

    return (
        <div className={classes.hamburger} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default HamburgerBtn;
