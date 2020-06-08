import { authAPI } from '../api/api';
import { getAuth } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
    return dispatch => {
        const promise = dispatch(getAuth());

        promise.then(() => {
            dispatch(initializedSuccess());
        })
    }
}

export default appReducer;