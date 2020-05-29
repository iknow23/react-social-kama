import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile} from '../../redux/profile-reducer';
import { withRouter } from "react-router-dom";
import { getProfile } from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    profile: state.profilePage.profile
})

const mapDispatchToProps = {
    setUserProfile
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer));
