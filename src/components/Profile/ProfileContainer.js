import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile, getProfile} from '../../redux/profile-reducer';
import { withRouter, Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />;
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
const mapDispatchToProps = {
    setUserProfile,
    getProfile
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer));
