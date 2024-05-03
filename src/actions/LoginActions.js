import axios from "axios"
import  * as types  from '../constants/ActionTypes'

export function checkLogin() {
    let jwt = localStorage.getItem('JWT');
    axios.get('http://localhost:8000/login/check', { headers: {"Authorization" : `Bearer ${jwt}`} }).then( res => {
        if(res.data.auth) {
            return {
                type: types.IS_LOGIN
            }
        }
        return {
            type: types.IS_NOT_LOGIN
        }
    }).catch((e) => {
        return {
            type: types.IS_NOT_LOGIN
        }
    }) ;
}