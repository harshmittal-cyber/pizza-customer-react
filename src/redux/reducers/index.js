import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoryReducer } from "./categoryReducer";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { addressReducer } from "./addressReducer";
import { orderReducer } from './orderReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['categoryReducer', 'userReducer', 'cartReducer', 'addressReducer', 'orderReducer']
}

const appReducer = combineReducers({
    categoryReducer,
    userReducer,
    cartReducer,
    addressReducer,
    orderReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)