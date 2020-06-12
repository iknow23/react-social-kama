import React, { useState, useEffect } from 'react';

const ProfileStatus = props => {
    const [editMode, setEditMode] = useState(false);

    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = e => {
        setStatus(e.currentTarget.value);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         });
    //     }
    // }

    return (
        <div>
            {!editMode
                ? <div>
                    <b>Status: </b><span onDoubleClick={ activateEditMode }>{props.status || "-------"}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode } value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;