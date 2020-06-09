import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
                <ProfileStatus status={status} updateStatus={updateStatus} />
                <p>{profile.aboutMe}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;