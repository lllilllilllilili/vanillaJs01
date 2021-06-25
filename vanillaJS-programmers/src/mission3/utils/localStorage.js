import {errorMessage} from "./errorMessage.js";


export const setLocalStorage = (key, data) => {
    try{
        if(JSON.stringify(data)==undefined || data.length===0)
            alert("검색 결과가 없습니다.");
        else
           localStorage.setItem(key, JSON.stringify(data));   
    }catch(error){
        throw new Error(errorMessage.CHECK_SET_LOCALSTORAGE(error));
    }
}

export const getLocalStorage = (key, data) => {
    try{
        return JSON.parse(localStorage.getItem(key));
    }catch(error){
        throw new Error(errorMessage.CHECK_GET_LOCALSTORAGE(error));
    }
}