import { combineReducers } from "redux";
import { employeeReducer } from "./reducers/employee";

const rootReducer = combineReducers({
    employee: employeeReducer
})

export default rootReducer;