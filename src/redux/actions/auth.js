import {apiPost,apiGet, setUserData} from '../../utils/utils';
import {LOGIN,SIGNUP} from "../../config/urls"
import store from '../store';
import types from '../types';


const {dispatch}=store;

export function saveUserData(data={
  name:"Vishal"
}){

  dispatch({
    type:types.LOGIN,
    payload:data
  })
}
export function login(data = {}) {
  return new Promise((resolve,reject)=>
  {
    apiPost(LOGIN, data).then(res=>
      {
        
        setUserData(res.data).then(suc=>{
         saveUserData(res.data);
        })
        console.log(JSON.stringify(res.data)+"asyncStorage")
        resolve(res)
      }).catch(error=>{
        reject(error)
      })
  })

}
export function signup(data = {}) {
  return apiPost(SIGNUP, data);
}
