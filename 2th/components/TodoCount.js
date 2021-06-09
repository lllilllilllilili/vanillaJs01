
function TodoCount($app, data){

    //태그 생성
    const todoCount = document.createElement('div');
    const todoCompleted = document.createElement('div');
    this.$state=data;
 
    //class명 정의
    todoCount.setAttribute("data-component-type", "TodoCount");
    todoCompleted.setAttribute("data-component-type", "TodoCompleted");

    //생성한 컴포넌트들을 $app 하단에 연결
    $app.appendChild(todoCount);
    $app.appendChild(todoCompleted);

    //TodoList에서 TodoCount 호출시 setState로 넘겨받은 인자 갱신
    this.setState=(nextState)=>{
        this.$state=nextState;
        this.render();
    }

    //render함수 정의
    this.render=()=>{
        let checkCnt=0;
        this.$state.reduce((acc, cur, i) =>{
            if(cur.isCompleted===true)
               checkCnt+=1;
        },0);
        todoCompleted.innerHTML=`✔️완료된 todo 개수 ${checkCnt}`;
        todoCount.innerHTML=`📖 총 todo 개수${this.$state.length}`;
    }
}

export default TodoCount;