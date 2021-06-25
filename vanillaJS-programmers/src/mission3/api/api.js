import {getLocalStorage} from "../utils/localStorage.js";

const API_ENDPOINT = 'https://jjalbot.com'

const jjalbotAPI = async(url) => {

    return await fetch(url)
                     .then((response) => {
                         if(response.ok){
                             return response.json();
                         }else{
                             throw new Error("Something went wrong");
                         }
                     })
                     .then((responseJson) => {
                         return responseJson;
                     })
                     .catch(error => {
                         alert(error); 
                     });   
}

export const requestAPI = {
    
    fetchJjalGif: (keyword) => {
        
        const jjalbotData = getLocalStorage(keyword);
        if(jjalbotData){
            return jjalbotData;
        }
        return jjalbotAPI(`${API_ENDPOINT}/api/jjals?text=${keyword}/`);
    }
}