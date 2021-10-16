import { combineReducers } from 'redux';
import studentReducer from './studentReducer'
import departmentReducer from './departmentReducer'
import authReducer from './authReducer'
import courseReducer from './courseReducer'
import errorReducer from './errorReducer'
import groupReducer from './groupReducer'
export default combineReducers({
    auth:authReducer,
    student: studentReducer,
    department: departmentReducer,
    courses:courseReducer,
    group:groupReducer,
    errors:errorReducer,
});