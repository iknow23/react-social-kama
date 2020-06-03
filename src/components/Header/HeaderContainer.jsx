import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, getAuth, logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const mapDispatchToProps = {
    setAuthUserData,
    getAuth,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);