import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';;
const checkLogin = () => {
    return Cookies.get('__SOSAR_AUTH') ? true : false;
}
const checkStatus = () => {
    const initCookies = JSON.parse(Cookies.get('__SOSAR_AUTH'));
    const user = initCookies?.user;
    return user?.status
}
export const PrivateRoute = ({ component: Component,permissions,...rest }) => {
    return(
    <Route {...rest} render={(props) => (

        checkLogin() === true
            ?permissions?.includes(checkStatus())
            ?
            <Component {...props} />:<Redirect to='/404' />
            : <Redirect to='/login' />
    )} />
)}
export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        checkLogin()
            ?<Redirect to='/' />
            :  <Component {...props} />
    )} />
)