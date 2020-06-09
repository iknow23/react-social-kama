import React from 'react';
import styles from './Users.module.css';
import usersPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small !== null ? user.photos.small : usersPhoto} className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id) }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}>Follow</button>
                    }
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </div>
            </div>
        </div>
    )
}

export default User;