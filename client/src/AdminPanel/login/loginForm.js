import React, { useState, useContext } from 'react';
import s from '../AdminPanel.module.css';
import { useHttp } from '../../API/feach/http.hook';
import { AuchContext } from '../../content/content.hook';
import { AlertMessage } from '../hooks/alert.hook';

const LoginFormPanel = () => {
  const auch = useContext(AuchContext)
  const { loading, reqest, error, clearError } = useHttp();

  const [formRegistr, setFormRegistr] = useState({
    email: "",
    password: "",
  });

  const chengeHendler = (event) => {
    setFormRegistr({ ...formRegistr, [event.target.name]: event.target.value });
  };

  const loginHendler = async () => {
    try {
      const data = await reqest("auth/login", "post", {...formRegistr});
      auch.login(data.token, data.userId)
    } catch (err) {}
  };
  
  return (<>
    {error ? <AlertMessage error={error} clearError={clearError}/> : null}
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
        <button className={s.btnPanel} disabled={loading} onClick={loginHendler}>Login</button>
      </div>
    </div>
  </>)
}

export default LoginFormPanel  