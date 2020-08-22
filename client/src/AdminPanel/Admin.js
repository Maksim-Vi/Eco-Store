import React, { useContext } from 'react';
import LoginFormPanel from './login/loginForm';
import {AuchContext} from '../content/content.hook';
import { Redirect } from 'react-router-dom';

const AdminPanel = () => {
    const auch = useContext(AuchContext)
    return (
        <div>
            {!auch.isAuthorization 
             ? <LoginFormPanel /> 
             : <Redirect to='/Eco-Store/AdminPanel/Tables' />
            }
        </div>
    )
}

export default AdminPanel  