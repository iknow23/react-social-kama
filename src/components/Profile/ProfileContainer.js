import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile, getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

const mapDispatchToProps = {
    setUserProfile,
    getProfile,
    getStatus,
    updateStatus
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    // WithAuthRedirect
)(ProfileContainer);