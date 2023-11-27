import { useDispatch } from 'react-redux';
import classes from './MiniProfile.module.css';
import { removeUsers } from '../../../store/auth/useAuth';

const MiniProfile = ({ userEmail, setSelected }) => {
    const dispatch = useDispatch();

    const btnClickHandler = () => {
        dispatch(removeUsers());
        setSelected((prev) => !prev);
    };
    return (
        <div className={classes.wrapper}>
            <div>{userEmail}</div>
            <button className={classes.button} onClick={btnClickHandler}>
                Log out
            </button>
        </div>
    );
};

export default MiniProfile;
