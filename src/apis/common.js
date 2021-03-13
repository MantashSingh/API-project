import {apiPost} from '../utils/utils';
import {UPLOAD_IMAGE} from '../config/urls';
export function uploadImage(data={}){
    const headers = {'Content-Type': 'multipart/form-data'};
    return apiPost(UPLOAD_IMAGE,data,headers);
 }
 
