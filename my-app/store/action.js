import axios from "axios";


export const loginStudent = (email,password) => {
  console.log(email,password)
  console.log('masuk student')
  return (dispatch,getState)=>{
   
    dispatch({
      type: "SET_LOADING",
      payload: true,
    })
    axios({
      method: "POST",
      url: "https://dangerous-wombat-18.loca.lt/students/login",
      data: {
        email: email,
        password: password
      }
    })
      .then(({data}) => {
        console.log(data.access_token)
        dispatch({
          type: "SET_ACCESS_TOKEN",
          payload: data.access_token,
        })
      
        })
        .catch(err=>{
          (console.log(err))
        })
        .finally(()=> {
          dispatch({
            type: "SET_LOADING",
            loading: false,
          })
        })
      }
}


export const loginTeacher = (email,password) => {
  console.log(email,password)
  console.log('masuk teacher')
  return (dispatch,getState)=>{
   
    dispatch({
      type: "SET_LOADING",
      payload: true,
    })
    axios({
      method: "POST",
      url: "https://dangerous-wombat-18.loca.lt/teachers/login",
      data: {
        email: email,
        password: password
      }
    })
      .then(({data}) => {
        console.log(data.Object)
        dispatch({
          type: "SET_ACCESS_TOKEN",
          payload: data.access_token,
        })
      
        })
        .catch(err=>{
          (console.log(err))
        })
        .finally(()=> {
          dispatch({
            type: "SET_LOADING",
            loading: false,
          })
        })
      }
}


