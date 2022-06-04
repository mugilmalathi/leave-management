import * as actionTypes from "../../action/actionTypes";

const INITIAL_STATE = {
    employee: [],
    // approved:[],
    // rejected:[]
  };


  export const employeeReducer = (state = INITIAL_STATE, { type, payload})=>{

    switch(type){

        case actionTypes.FETCH_DATA:
          return { ...state, employee: payload};

        case actionTypes.APPROVE:
          let app = state.employee.filter((e)=>{
            if(e.approve == false){
              e.approve = true;
              return true;
            }else{
              return true;
            }
          })
          return {...state, employee:app}

        case actionTypes.REJECT:
          return {...state, employee: payload}

        default:
            return state;
    }
  }