import { createStore, combineReducers } from 'redux';
import bucket from './modules/bucaket';

const rootReducer = combineReducers({ bucket });

const store = createStore(rootReducer);

export default store;