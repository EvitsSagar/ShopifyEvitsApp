import { combineReducers } from 'redux';
import viewAllProductReducer from './Redusers/GetAllProducts';

const rootReducer = combineReducers({
 viewAllProductReducer:viewAllProductReducer,
});

export default rootReducer;
