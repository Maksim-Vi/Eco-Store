import {createContext} from 'react';

const noop = () =>{}

export const AuchContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthorization: false
})

export const AuchContextItem = createContext({
   item:null
})