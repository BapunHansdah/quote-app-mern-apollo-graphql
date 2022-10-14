//for combining the reducers
import {defaultList} from './List'

import { combineReducers } from "redux";
const reducers = combineReducers({defaultList});
export default reducers;