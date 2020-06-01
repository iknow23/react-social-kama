import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile, getProfile} from '../../redux/profile-reducer';
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.props.getProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
};

const AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

const mapStateToProps = state => ({
    profile: state.profilePage.profile
})

const mapDispatchToProps = {
    setUserProfile,
    getProfile
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent));
