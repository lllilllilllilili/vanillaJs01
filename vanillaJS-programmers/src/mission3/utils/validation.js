import {errorMessage} from "./errorMessage.js";

export const checkDataValidation = (data) => {
    if(!data){
        throw new Error(errorMessage.CHECK_VALIDATE_IS("data", "empty"));
    }
    
    if(!Array.isArray){
        throw new Error(errorMessage.CHECK_VALIDATE_IS_NOT("data", "array"));
    }
   
    data.forEach(ele =>{
        if(typeof ele !== 'object')
            throw new Error(errorMessage.CHECK_HAS_NOT("data", "object"));
    });
}
