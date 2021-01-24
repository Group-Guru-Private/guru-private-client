import axios from '../config/axiosInstance'


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
      url: "/students/login",
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
      url: "/teachers/login",
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

export const fetchStudent = () => {

  console.log('masuk fetch stud')
  return (dispatch,getState)=>{
   
    dispatch({
      type: "SET_LOADING",
      payload: true,
    })
    axios({
      method: "GET",
      url: "/students",
    })
      .then(({data}) => {
        console.log(data)
        dispatch({
          type: "SET_ALL_STUDENT",
          payload: data,
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
export const fetchTeachers = () => {

  console.log('masuk fetch teacher')
  return (dispatch,getState)=>{
   
    dispatch({
      type: "SET_LOADING",
      payload: true,
    })
    axios({
      method: "GET",
      url: "/teachers",
    })
      .then(({data}) => {
        console.log(data)
        dispatch({
          type: "SET_ALL_TEACHERS",
          payload: data,
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


