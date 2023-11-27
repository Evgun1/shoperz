import classes from './Profile.module.css';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setUsers } from '../../../store/auth/useAuth';
import { toggle } from '../../../store/popup/popup';
import useAuth from '../../../hooks/use-auth';
import { Form } from 'react-router-dom';

const ProfileLog = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { isAuth } = useAuth();

    const togglePopupHandler = () => {
        isAuth ? dispatch(toggle(null)) : console.log('error');
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const auth = getAuth();
        if (email.length && email.includes('@') && pass.length >= 6) {
            try {
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    email,
                    pass
                );
                dispatch(
                    setUsers({
                        email: userCredential.user.email,
                        id: userCredential.user.uid,
                        token: userCredential.user.accessToken,
                    })
                );
            } catch (error) {
                alert(error);
            }
        }
    };

    return (
        <Form className={classes.form} method="POST">
            <h3>Sign in</h3>
            <div className={classes.log}>
                <div className={classes.input}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="email"
                        type="email"
                        name="email"
                    />
                </div>
                <div className={classes.input}>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                        id="password"
                        type="password"
                        name="password"
                    />
                </div>
                <button type="submit" className={classes.btn}>
                    Sing in
                </button>
                <div className={classes.labelNewAcc}>
                    <span>New accaunt</span>
                </div>
            </div>
        </Form>
    );
};

export default ProfileLog;
