import React, { Suspense } from 'react';
import store from "./redux/redux-store";
import {HashRouter, Switch, Redirect} from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    // отлов сетевых запросов по всему app
    catchAllUnhandledErrors = unhandledrejection => {
        alert(unhandledrejection);
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={ () => <Redirect to={'/profile'} /> }/>
                        <Route path='/profile/:userId?' render={ () => (
                            <Suspense fallback={<Preloader />}>
                                <ProfileContainer />
                            </Suspense>
                        )}/>
                        <Route path='/dialogs' render={ () => (
                            <Suspense fallback={<Preloader />}>
                                <DialogsContainer />
                            </Suspense>
                        )}/>
                        <Route path='/users' render={ () => <UsersContainer /> }/>
                        <Route path='/login/vk' render={ () => <div>Vkontakte</div> }/>
                        <Route path='/login' render={ () => <Login /> }/>
                        <Route path='*' render={ () => <div>404 NOT FOUND</div> }/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SocialApp = props => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    )
}

export default SocialApp