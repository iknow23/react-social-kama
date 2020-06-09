import React from 'react';
import styles from './Paginator.module.css';

const Paginator = props => {
    let pagesCount = props.totalUsersCount / props.pageSize;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => <span className={props.currentPage === p && styles.selectedPage} onClick={() => props.onPageChanged(p)}>{p}</span>)}
        </div>
    )
}

export default Paginator;