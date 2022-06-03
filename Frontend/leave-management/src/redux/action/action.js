import * as actionTypes from "./actionTypes";
import api from "../../Apis/api"

export const SetGrocery = (employee)=>{

    return{
        type: actionTypes.SET_DATA,
        payload: employee
    }
  }
  
export const FetchData = ()=> async (dispatch)=>{
  const response = await api.get("/employee");
  dispatch({
    type: actionTypes.FETCH_DATA, 
    payload: response.data
    })
  }