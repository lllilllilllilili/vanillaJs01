import todoCount from "./TodoCount.js";
const todoList = document.querySelector('#todoList');

function TodoList(data, $app, onToggle, onDelete){
   
   
    //선언 및 초기화
    this.state = data 
    
    //데이터 검증
    //app이 존재여부
    if(!$app){
      throw new Error('$app이 올바르지 않습니다.');
    }

    //this.state 검증
    if(!this.state || !Array.isArray(this.state)){
      throw new Error('data가 올바르지 않습니다.');
    }
    
    //new객체 생성 검증
    if(!new.target){
      throw new Error('new로 객체를 생성해주세요');
    }

    //li를 묶기 위해 ul 태그 생성
    this.$target = document.createElement('ul')

    //생성한 ul태그를 $app에 정의    
    $app.appendChild(this.$target);

    this.onToggle = onToggle;
    this.onDelete = onDelete;

    //커스텀으로 component 생성 
    //ul - li 구조
    this.$target.setAttribute('data-component-type', 'TodoListEle');
    
    //render 함수 구현
    this.render = () =>{
        console.log(this.state);
          const todoHtmlStr = this.state.map(({id, text, isCompleted}) =>
            `<li id=${id} class="complete_${isCompleted}">
              <span class="complete_false">${text}</span>
              <span class="todoBtn">${'❌'}</span>
              </li>`
            ).join('')
          
          this.$target.innerHTML=todoHtmlStr
    }

    this.render()

    //todoCount 컴포넌트 생성
    this.todoCount = new todoCount($app, this.state);
    
    //TodoInput으로 넘겨받은 데이터를 갱신
    this.setState = (nextState) =>{
        this.state = nextState
        this.render();
        this.todoCount.setState(this.state);
    }
    
    //Event Delegate 생성
    this.$target.addEventListener("click", (e)=>{
      const { classList } = e.target
      //class로 구분, li의 id값만 알고 있으면 complete 혹은 delete 수행
      if (classList.contains("complete_false") || classList.contains("complete_true")) 
          this.onToggle(e.target.closest("li").id);
      if (classList.contains("todoBtn")) 
        this.onDelete(e.target.closest("li").id);
    })

   
}



export default TodoList