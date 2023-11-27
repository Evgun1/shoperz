import { useState } from 'react';
import classes from './Profile.module.css';
import ProfileLog from './ProfileLog';
import ProfileReg from './ProfileReg';
import useAuth from '../../../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUsers } from '../../../store/auth/useAuth';

const Profile = () => {
    const dispatch = useDispatch();
    const [showSubReg, setShowSubReg] = useState(false);

    const btnClick = () => setShowSubReg((prev) => !prev);

    return (
        <div className={classes.wrapper}>
            {showSubReg ? (
                <ProfileReg setShowSubReg={setShowSubReg} />
            ) : (
                <div>
                    <ProfileLog />
                    <div className={classes.reg} onClick={btnClick}>
                        <button className={classes.btn}>Register</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
