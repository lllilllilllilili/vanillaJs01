function TodoList(params) {
    const $target = params.$target;
    const onClick = params.onClick;
    const onRemove = params.onRemove;
    this.$data = params.data;

    
    $target.addEventListener("click", function(e) {

      //BUG : e.target.closest('li').id 와 e.target.closest('li').dataset.id 차이점
      const id = e.target.closest("li").id;
      
      const username = e.target.closest("li").innerHTML;
      
      if (e.target.className === 'remove-button') {
        e.stopPropagation()
        onRemove(id)
      } else {
        onClick(id)
      }
    })
   
    
    $target.addEventListener("dragover", (event) => {
      event.preventDefault()
      event.dataTransfer.dropEffect = "copy"
    })
  
    $target.addEventListener("drop", (event) => {
      event.preventDefault()
      const targetId = event.dataTransfer.getData("id")
      const startBoundary = document.getElementById(targetId).parentNode
      const droppedBoundary = event.target.closest("ul")
      
      if (startBoundary !== droppedBoundary) {
        onClick(targetId)
      }
    })


    this.setState = (nextData) => {
      
      this.$data = nextData
      this.render()
    }
    

    this.render = function() {
      if(this.$data.isLoading === false){
        if(this.$data.isCompleted)
          $target.innerHTML = `<div class="message">완료한 Task 로딩중입니다...</div>`;
   
        if(!this.$data.isCompleted)
          $target.innerHTML = `<div class="message">아직 완료하지 못한 Task 로딩중입니다...</div>`;
        
      }

      if(this.$data.isLoading === true){
        const htmlString = this.$data.data.map(function(todo) {
          const contentHTML = todo.isCompleted
            ? `<strike>${todo.content}</strike>`
            : `${todo.content}`
    
          return `<li id="${
            todo._id
          }" draggable="true" >${contentHTML} <button class="remove-button">Remove</button></li>`
        })
    
        $target.innerHTML = `${htmlString.join('')}`
      }
    }
    
    this.render()
  }

export default TodoList;
