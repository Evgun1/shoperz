import classes from './Profile.module.css';
import ProfileForm from './ProfileForm';

const Profile = () => {
    return (
        <div className={classes.wrapper}>
            <ProfileForm />
            <div className={classes.reg}>
                <p>New accaunt</p>
                <button className={classes.btn}>Register</button>
            </div>
        </div>
    );
};

export default Profile;
