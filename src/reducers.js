import { combineReducers } from 'redux';
import demo from './modules/demo/ducks/demo';

const rootReducer = combineReducers({
  demo
})

export default rootReducer;
