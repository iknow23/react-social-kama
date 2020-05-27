import React from 'react';
import styles from './Users.module.css';
import usersPhoto from '../../assets/images/user.png';

const Users = props => {
    let pagesCount = props.totalUsersCount / props.pageSize;
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    return (
        <div>
            <div>
                {pages.map(p => <span className={props.currentPage === p && styles.selectedPage} onClick={() => props.onPageChanged(p)}>{p}</span>)}
            </div>
            {
                props.users.map(u => (
                    <div key={u.id}>
                        <div>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : usersPhoto} className={styles.userPhoto} />
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => props.unfollow(u.id)}>Follow</button> : <button onClick={() => props.follow(u.id)}>Unfollow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Users;