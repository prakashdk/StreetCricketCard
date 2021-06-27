import { applyMiddleware, combineReducers, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import logger from'redux-logger'
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import ScoreCardReducer from "./reducers/ScoreCardReducer";

const reducer=combineReducers({
    scorecard:ScoreCardReducer,
})

const middleware=[logger]

const persistConfig={
    key:'root',
    storage,
}
const persistedReducer=persistReducer(persistConfig,reducer)
export const store=createStore(persistedReducer,applyMiddleware(...middleware))
export const persistor=persistStore(store)