import {
    ORDER_PLACE_FAIL,
    ORDER_PLACE_REQUEST,
    ORDER_PLACE_SUCCESS,
    GET_ORDER_FAIL,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS
} from '../constants/orderConstant';


const initialState = {
    loading: false,
    error: null,
    message: null,
    order: []
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_PLACE_REQUEST:
        case GET_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                message: null
            }

        case ORDER_PLACE_SUCCESS:
            return {
                ...state,
                order: [...state.order, action.payload.order],
                loading: false,
                error: null,
                message: action.payload.message
            }

        case GET_ORDER_SUCCESS:
            return {
                ...state,
                order: action.payload,
                loading: false,
                error: null,
                message: action.payload.message
            }


        case ORDER_PLACE_FAIL:
        case GET_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}