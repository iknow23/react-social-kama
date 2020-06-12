import React from 'react';
import { createField, Input, Textarea } from '../../common/FormControls/FormControls';
import { reduxForm } from 'redux-form';
import style from '../../common/FormControls/FormControls.module.css';

import s from './ProfileInfo.module.css';

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {error &&
                <div className={style.formSammuryError}>
                    {error}
                </div>
            }

            <div>
                <strong>Full name:</strong> {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <strong>Looking for a job:</strong> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <strong>My professional skills</strong> {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <strong>About me:</strong> {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <strong>Contacts:</strong> {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={s.contact}>
                            <strong>{key}: </strong> {createField(key, 'contacts.' + key, [], Input)}
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm);

export default ProfileDataFormReduxForm;