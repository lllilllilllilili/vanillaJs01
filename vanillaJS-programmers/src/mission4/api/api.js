import {errorMessage} from "../utils/utils.js"

const API_ENDPOINT = "https://todo-api.roto.codes"
const defaultName = "hwnagingyu";
const defaultValue = "defaultValue";

export const onTodoApi = {
    onGetTodo : async(username = defaultName, delay) => {
        const response = await fetch(`${API_ENDPOINT}/${username}?delay=${delay}`);
        
        if(response.ok)
            return await response.json();
        else{
            switch(response.status){
                case errorMessage.STATUS_BAD_REQUEST :
                    alert("잘못된 요청이 ...");
                    break;
                case errorMessage.STATUS_NOT_FOUND :
                    alert("찾는 데이터가 없나바...");
                    break;
                case errorMessage.STATUS_SERVER_ERROR :
                    alert("서버 에러");
                    break;
                default :
                    new Error(errorMessage.CHECK_TODOS(username));
            }
        }
    },
    
    onAddTodo : async(username = defaultName, value = defaultValue) => {
        const addTodo = await fetch(`${API_ENDPOINT}/${username}`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                content : value
            }),
        });
        
        if(addTodo.ok){
            return true;
        }else{
            switch(response.status){
                case errorMessage.STATUS_BAD_REQUEST :
                    alert("잘못된 요청이 ...");
                    break;
                case errorMessage.STATUS_NOT_FOUND :
                    alert("찾는 데이터가 없나바...");
                    break;
                case errorMessage.STATUS_SERVER_ERROR :
                    alert("서버 에러");
                    break;
                default :
                    throw new Error(errorMessage.CHECK_INSERT(username));
            }
        }
    },

    onToggleTodo : async(username = defaultName, id) => {
        const toggleTodo = await fetch(`${API_ENDPOINT}/${username}/${id}/toggle`, {
            method: "PUT",
        });
        
        if(toggleTodo.ok){
            return true;
        }else{
            switch(response.status){
                case errorMessage.STATUS_BAD_REQUEST :
                    alert("잘못된 요청이 ...");
                    break;
                case errorMessage.STATUS_NOT_FOUND :
                    alert("찾는 데이터가 없나바...");
                    break;
                case errorMessage.STATUS_SERVER_ERROR :
                    alert("서버 에러");
                    break;
                default :
                    throw new Error(errorMessage.CHECK_TOGGLE(username));
            }
        }
    },

    onDeleteTodo : async(username = defaultName, id) => {
        const deleteTodo = await fetch(`${API_ENDPOINT}/${username}/${id}`, {
            method : "DELETE",
        });

        if(deleteTodo.ok){
            return true;
        }else{
            switch(response.status){
                case errorMessage.STATUS_BAD_REQUEST :
                    alert("잘못된 요청이 ...");
                    break;
                case errorMessage.STATUS_NOT_FOUND :
                    alert("찾는 데이터가 없나바...");
                    break;
                case errorMessage.STATUS_SERVER_ERROR :
                    alert("서버 에러");
                    break;
                default :
                    throw new Error(errorMessage.CHECK_DELETE(username));
            }
        }
    },

    onDeleteTodoAll : async(username = defaultName) => {
        const deleteTodoAll = await fetch(`${API_ENDPOINT}/${username}/all`,{
            method : "DELETE",
        })
        if(deleteTodoAll.ok){
            return true;
        }else{
            switch(response.status){
                case errorMessage.STATUS_BAD_REQUEST :
                    alert("잘못된 요청이 ...");
                    break;
                case errorMessage.STATUS_NOT_FOUND :
                    alert("찾는 데이터가 없나바...");
                    break;
                case errorMessage.STATUS_SERVER_ERROR :
                    alert("서버 에러");
                    break;
                default :
                throw new Error(errorMessage.CHECK_DELETE_ALL(username));
            }  
        }
    },

    onGetUserList : async() => {
        const userList = await fetch(`${API_ENDPOINT}/users`)
      
        if(userList.ok){
            return await userList.json();
        }else{
            switch(response.status){
                case errorMessage.STATUS_BAD_REQUEST :
                    alert("잘못된 요청이 ...");
                    break;
                case errorMessage.STATUS_NOT_FOUND :
                    alert("찾는 데이터가 없나바...");
                    break;
                case errorMessage.STATUS_SERVER_ERROR :
                    alert("서버 에러");
                    break;
                default :
                    throw new Error(errorMessage.CHECK_USER_LIST());
            }
        }
    }
}
