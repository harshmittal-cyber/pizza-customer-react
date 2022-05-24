import {
    SEND_OTP_FAIL,
    SEND_OTP_REQUEST,
    SEND_OTP_SUCCESS,
    VERIFY_OTP_FAIL,
    VERIFY_OTP_REQUEST,
    VERIFY_OTP_SUCCESS,
    LOGOUT_SUCCESS
} from '../constants/userConstant';


const initialState = {
    isAuth: false,
    loading: false,
    error: null,
    message: null,
    user: null,
    otp: {
        phone: null,
        hash: null
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_OTP_REQUEST:
        case VERIFY_OTP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                message: null
            }

        case SEND_OTP_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                otp: {
                    phone: action.payload.phone,
                    hash: action.payload.hash
                }
            }

        case VERIFY_OTP_SUCCESS:
            return {
                ...state,
                isAuth: true,
                loading: false,
                message: action.payload.message,
                user: action.payload.user,
                otp: {
                    phone: null, hash: null
                }
            }

        case SEND_OTP_FAIL:
        case VERIFY_OTP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                message: null,
                user: null,
                error: null
            }

        default:
            return state
    }
}