const data = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    }
  ]
  
  const data2 = [
    {
      text: 'JS 공부하기2',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기2',
      isCompleted: false,
    },
  ]

  const data3 = [
    {
      text: 'JS 공부하기3',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기3',
      isCompleted: false,
    },
  ]
  
  //[Mission1] : TodoList 함수 생성
  function TodoList(data, $app){
    
    this.state = data 
    
    if(!$app){
      throw new Error('$app이 올바르지 않습니다.');
    }

    if(!data || !Array.isArray(data)){
      throw new Error('data가 올바르지 않습니다.');
    }

    this.$target = document.createElement('div')

    //코드 가독성
    $app.appendChild(this.$target);

    this.$target.setAttribute('data-component-type', 'TodoList');
    //this.$target.className = 'TodoList'
    


    //[Mission1] 보너스 new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기 
    if(!new.target){
        throw new Error('new로 객체를 생성해주세요');
    }
  
    this.render = () =>{
          const todoHtmlStr = this.state.map(({text, isCompleted}) =>
            isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
            //todo=>`<li>${todo.text}</li>`
            
            ).join('')
          
          this.$target.innerHTML=todoHtmlStr
    }
    this.render()

    //[Mission1] 보너스 구현사항 setState
    this.setState = (nextState) =>{
        this.state = nextState
        this.render();
    }
}



try{
  const $app = document.querySelector('#app')
  const todoList = new TodoList(data, $app);
  //new TodoList([{text : 'hey'}], $app);
  //new TodoList(data3, document.querySelector(`#todo-list3`));
  setTimeout(()=>{
    todoList.setState([
      ...data,
      {
        text:"first"
      }
    ])

    setTimeout(()=>{
      todoList.setState([
        ...data,
        {
          text:"second"
        }
      ])
    },2000);
  },2000);

  
}catch(error){
  alert(error.message)
}


// todoList.setState([
//     {
//         text: 'setState',
//         isCompleted: true,
//     }
// ])