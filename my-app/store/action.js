import axios from "axios";




export const login = (payload) => {
  console.log(payload)
  return (dispatch,getState)=>{
   
    dispatch({
      type: "SET_LOADING",
      payload: true,
    })
  
    axios({
      method: "POST",
      url: "exp://192.168.1.8:19000/students/login",
      data: payload
    })

    .then(({data}) => {
      console.log(data)
     
      // dispatch({
      //   type: "SET_ACCESS_TOKEN",
      //   payload: data.access_token,
      // })
      
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

