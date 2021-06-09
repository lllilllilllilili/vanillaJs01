import TodoList from "./components/TodoList.js";
import TodoInput from "./components/TodoInput.js";
import TodoDeleteAll from "./components/TodoDeleteAll.js";


//각 컴포넌트에 인자로 넘겨주는 부분을 함수 처리 하므로써, data 관리에 유연성을 추가하고 싶었습니다. ⇢ setState
function App($target){

  
  //localstorage todo 데이터 저장
  this.$state = this.$state ? JSON.parse(localStorage.getItem("Todo")) : [];
  
  //todoInput : 데이터를 받아올 인풋 컴포넌트
  this.todoInput = new TodoInput($target, (text) =>{
    const newData = [
      ...this.$state
      ,{
      id : this.$state.length+1,
      text : text,
      isCompleted : false
    }
  ];
  this.setState(newData);
  });
  
  //todoDeleteAll : todo 목록을 모두 삭제하는 컴포넌트 
  this.todoDeleteAll = new TodoDeleteAll($target, ()=>{
    const newData = []
    this.setState(newData);
  });

  //todoList : todo 를 render 하는 컴포넌트
  this.todoList = new TodoList(this.$state, $target,
    (liId)=>{
      
      const toggleTodos = this.$state.map((todo)=>{
        
        //...todo 하면 인자가 2개가 있는데 isCompleted 만 따로 인지하고 반전시켜주나 신기하네 이건 후에 테스트해보자! 
        return todo.id === parseInt(liId) ? {...todo, isCompleted : !todo.isCompleted } : todo
      });
      
      this.setState(toggleTodos);

    },
    (liId)=>{
      const cleanTodos = this.$state.filter((todo)=>{
        return todo.id !== parseInt(liId);
      });
      this.setState(cleanTodos);
    }
    );
  
    
    this.setState = (nextState) =>{
      this.$state = nextState;
      localStorage.setItem("Todo", JSON.stringify(this.$state));
      this.todoList.setState(this.$state);
    }
}




export default App
