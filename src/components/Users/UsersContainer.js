import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, gerUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.gerUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.gerUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapDispatchToProps = {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    gerUsers
}

export default compose(
    // WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);
