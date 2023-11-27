import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import classes from './ProfileReg.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../../store/auth/useAuth';

const ProfileReg = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const btnClickBack = () => props.setShowSubReg(false);
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const auth = getAuth();
        if (email.length && email.includes('@') && pass.length >= 6) {
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    pass
                );
                console.log(userCredential);
                dispatch(
                    setUsers({
                        email: userCredential.user.email,
                        id: userCredential.user.uid,
                        token: userCredential.user.accessToken,
                    })
                );
            } catch (error) {
                console.log(error);
                alert(error.message);
            }
        } else {
            alert('You should fill password and email fields');
        }
    };

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <h3>Registration</h3>
            <div className={classes.reg}>
                <div className={classes.input}>
                    <label htmlFor="User Name">User Name</label>
                    <input placeholder="User Name" id="userName" type="text" />
                </div>
                <div className={classes.input}>
                    <label htmlFor="">E-mail</label>
                    <input
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={classes.input}>
                    <label htmlFor="">Password</label>
                    <input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                    />
                </div>
            </div>
            <div className={classes.btn}>
                <button className={classes.btnBack} onClick={btnClickBack}>
                    Back
                </button>
                <button className={classes.btnReg}>Register</button>
            </div>
        </form>
    );
};

export default ProfileReg;
