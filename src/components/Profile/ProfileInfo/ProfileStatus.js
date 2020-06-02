import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activatedEditMode = value => {
        this.setState({
            editMode: value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={() => this.activatedEditMode(true)}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus onBlur={() => this.activatedEditMode(false)} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;