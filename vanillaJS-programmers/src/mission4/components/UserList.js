
function UserList(params){
    const $target = params.$target;
    const users = params.users;
    const onClick = params.onClick;
    this.usersList = params.data;
    this.$clickedKeyword = "hwangingyu";
    users();
  
    this.clickUserName = (li) => {
       
        this.$clickedKeyword = li.innerText;
        onClick(this.$clickedKeyword);
    }

    $target.addEventListener("click", (event) => {
        const {classList} = event.target
        if(classList.contains("user-list-element"))
            this.clickUserName(event.target.closest("li"));
    })

    this.render = () => {
        
        if(this.usersList.isLoading === false){
            $target.innerHTML = `<div class="message">로딩중입니다...</div>`
        }
        if(this.usersList.isLoading === true){
         
            const htmlString = this.usersList.data.map((userList) =>{
                const className = `user-list-element ${ this.$clickedKeyword === userList ? "current" : "" }`.trimEnd();
                return `<li class="${className}" user-name = "${
                userList
                }">${userList}</li>`
            })

            $target.innerHTML = `<ul class="user-list">${htmlString.join("")}</ul>`
        }   
    }

    
    this.setState = (nextData) => {
       
        this.usersList = nextData;
        this.render()
    }
}

export default UserList; 
