import  {DETAILS}  from "./constant";
import api from "../../utils/api";

export const register = (name, email, password) => async (dispatch) => {
  console.log(name);
  try {
    const { data } = await api.post("/userAuth/register",{name,email,password});
    console.log("data",data);
  } catch (error) {
    console.log(error);
  }
};


export const login = (email, password) => async (dispatch) => {
  console.log(email);
  try {
    const { data } = await api.post("/userAuth/login",{email,password});
    console.log("data",data);
    dispatch({
      type:DETAILS,
      payload:data?.existingUser
    })
  } catch (error) {
    console.log(error);
  }
};