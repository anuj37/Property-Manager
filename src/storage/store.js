

import { createStore } from 'redux';
// import rootReducer from './rootReducer';
import reducer from "./add/reducer";
const store = createStore(reducer);

export default store;



