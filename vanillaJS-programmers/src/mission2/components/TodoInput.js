function TodoInput($app, addData){
    //input 태그를 만들고 app에 append
    const todoInput = document.createElement('input');
    todoInput.setAttribute("data-component-type","TodoInput");
    todoInput.setAttribute("placeholder", "enter를 치면 todolist가 작성됩니다.");
    $app.appendChild(todoInput);
    
    //입력받은 데이터를 저장하기 위해 선언 및 초기화
    this.addData=addData

    //handleSubmit 정의
    this.handleSubmit = (event) =>{
        //re-render 방지 
        event.preventDefault();

        //enter를 입력해야 input값을 넘겨 받는다.
        if(event.keyCode!==13) return;
        
        //인풋 값을 newData에 저장
        const curValue = todoInput.value;
        this.addData(curValue);
        
        //인풋 입력창 '' 초기화
        todoInput.value = '';
      }

    //입력이 떨어지는 순간 handleSubmit로 trigger
    todoInput.addEventListener('keyup', this.handleSubmit);
}

export default TodoInput;