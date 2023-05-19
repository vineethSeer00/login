import {DETAILS} from './constant'

const initialstate={
    user:null
}

export function authDetails(state=initialstate,{type,payload}){
    console.log(payload);
    console.log(type);
    switch(type){
        case DETAILS:
            return{
                ...state,
                user:payload,
            }
            default:
                return state
    }
}