import { useDispatch } from 'react-redux';
import profile from '../../../image/icons/profile.svg';
import { toggle } from '../../../store/popup/popup';
import Profile from './Profile';

const BtnProfile = () => {
    const dispatch = useDispatch();
    const togglePopupHandler = () => {
        dispatch(toggle(<Profile />));
    };

    return (
        <button onClick={togglePopupHandler}>
            <img src={profile} alt="" />
        </button>
    );
};

export default BtnProfile;
