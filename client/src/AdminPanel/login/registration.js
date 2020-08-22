import React, { useState } from 'react';
import NavBarPanel from '../nav/navBarPanel';
import s from '../AdminPanel.module.css';
import { useHttp } from '../../API/feach/http.hook';
import { AlertMessage } from '../hooks/alert.hook';

const Registration = () => {

    const { loading, reqest, error, clearError } = useHttp();

    const [formRegistr, setFormRegistr] = useState({
        email: "",
        password: "",
    });

    const chengeHendler = (event) => {
        setFormRegistr({ ...formRegistr, [event.target.name]: event.target.value });
    };

    const registerHendler = async () => {
        try {
            await reqest("auth/register", "post", { ...formRegistr });
        } catch (err) { }
    };

    return (
        <div>
            <NavBarPanel />
            {error ? <AlertMessage error={error} clearError={clearError} /> : null}
            <div className={s.HeaderLog}>
                <div className={s.loginPanel}>
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        onChange={chengeHendler}
                    />
                </div>
                <div className={s.passwordPanel}>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={chengeHendler}
                    />
                </div>
                <div>
                    <button className={s.btnPanel} disabled={loading} onClick={registerHendler}>Registration</button>
                </div>
            </div>
        </div>
    )
}

export default Registration
