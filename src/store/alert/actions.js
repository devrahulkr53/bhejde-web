import {
  GET_ALERT,
  SET_ALERT,
} from "./actionTypes"

export const getAlert = () => ({
  type: GET_ALERT,
})

export const setAlert = data => ({
  type: SET_ALERT,
  payload: data,
})
 