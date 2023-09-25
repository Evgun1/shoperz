import { useDispatch } from 'react-redux';
import classes from './HamburgerBtn.module.css';
// import { uiActionMenu } from '../../../store/mobileMenu/ui-sliceMobile';
import Hamburger from './Hamburger';
import { toggle } from '../../../store/popup/popup';

const HamburgerBtn = () => {
    const dispatch = useDispatch();
    const toggleMobileMenu = () => {
        dispatch(toggle(<Hamburger />));
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
