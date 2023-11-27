import classes from './BtnProfile.module.css';
import MiniProfile from './MiniProfile';
import Profile from './Profile';
import profile from '../../../image/icons/profile.svg';

import useAuth from '../../../hooks/use-auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../store/popup/popup';

const BtnProfile = () => {
    const [selected, setSelected] = useState(false);
    const { isAuth, email } = useAuth();
    const dispatch = useDispatch();
    const togglePopupHandler = () => {
        isAuth ? setSelected((prev) => !prev) : dispatch(toggle(<Profile />));
    };

    return (
        <div className={classes.wrapper}>
            <button onClick={togglePopupHandler}>
                <img src={profile} alt="" />
            </button>
            {selected && (
                <MiniProfile setSelected={setSelected} userEmail={email} />
            )}
        </div>
    );
};

export default BtnProfile;
