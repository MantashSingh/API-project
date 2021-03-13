import {apiPost, apiGet, setUserData} from '../utils/utils';
import {LOGIN, SIGNUP} from '../config/urls';
import {Pressable} from 'react-native';
export function login(data = {}) {
  return new Promise((resolve,reject)=>{
    apiPost(LOGIN , data).then(res=>{
      setUserData(res.data);
      resolve(res.data);
      resolve(res);
    }).catch(error=>{
      reject(error);
    })
  })
}
  

export function signup(data = {}) {
  return apiPost(SIGNUP, data);
}
