import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({users, currentPage, onPageChanged, totalUsersCount, pageSize, followingInProgress, unfollow, follow,  ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
            <div>
                {users.map(u => <User user={u} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} key={u.id} />)}
            </div>
        </div>
    )
}

export default Users;