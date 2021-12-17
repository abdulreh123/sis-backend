import React from 'react';
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import SnackbarProvider from 'react-simple-snackbar'
import AlertTemplate from "react-alert-template-basic";
import store from './store';
import './scss/style.scss';
import { PublicRoute } from './routing';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const App=()=>{
  return (
  <SnackbarProvider store={store}>
    <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <PublicRoute exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
            <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> 
          </Switch>
        </React.Suspense>
    </HashRouter>
  </SnackbarProvider>
  );
}

export default App;