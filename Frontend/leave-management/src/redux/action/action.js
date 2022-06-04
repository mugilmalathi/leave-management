import * as actionTypes from "./actionTypes";
import api from "../../Apis/api"
  
export const FetchData = ()=> async (dispatch)=>{
  const response = await api.get("/employee");
  dispatch({
    type: actionTypes.FETCH_DATA, 
    payload: response.data
    })
  }

  export const approve = (id)=> async (dispatch)=>{
    const response = await api.patch(`/employee/${id}`);
    dispatch({
      type: actionTypes.APPROVE, 
      payload: response.data
      })
    }

export const reject = (id)=> async (dispatch)=>{
  const response = await api.delete(`/employee/${id}`);
  dispatch({
    type: actionTypes.APPROVE, 
    payload: response.data
    })
}