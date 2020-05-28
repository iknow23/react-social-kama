import React from "react";
import Profile from "./Profile";
import * as axios from 'axios';
import { connect } from "react-redux";
import {setUserProfile} from '../../redux/profile-reducer';
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : 2}`)
            .then(response => {
                this.props.setUserProfile(response.data);
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
