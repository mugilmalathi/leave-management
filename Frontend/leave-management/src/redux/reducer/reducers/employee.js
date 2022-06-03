import * as actionTypes from "../../action/actionTypes";

const INITIAL_STATE = {
    employee: []
  };


  export const employeeReducer = (state = INITIAL_STATE, { type, payload})=>{

    switch(type){

        case actionTypes.SET_DATA:
            return { ...state, employee: payload};

        case actionTypes.FETCH_DATA:
          return { ...state, employee: payload};

        default:
            return state;
    }
  }