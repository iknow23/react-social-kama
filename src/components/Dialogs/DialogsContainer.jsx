import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

const AuthRedirectComponent = WithAuthRedirect(Dialogs);

const mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNewMessageBody: body => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessageCreator: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;