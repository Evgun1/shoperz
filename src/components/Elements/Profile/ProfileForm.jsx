import { useState } from 'react';
import classes from './Profile.module.css';

const ProfileForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassworld, setEnteredPassworld] = useState('');

    const enteredEmailisValid = enteredEmail.trim() != '';

    const emailInputChangeHandler = (event) =>
        setEnteredEmail(event.target.value);

    const passworldInputChangeHandler = (event) =>
        setEnteredEmail(event.target.value);

    const formSubmissHandler = (event) => event.preventDefault();

    return (
        <form className={classes.form} onSubmit={formSubmissHandler}>
            <div className={classes.log}>
                <div className={classes.input}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        onChange={emailInputChangeHandler}
                    />
                </div>
                <div className={classes.input}>
                    <label htmlFor="passworld">Passworld</label>
                    <input
                        id="passworld"
                        type="text"
                        onChange={passworldInputChangeHandler}
                    />
                </div>
                <button className={classes.btn}>Sing in</button>
            </div>
        </form>
    );
};

export default ProfileForm;
