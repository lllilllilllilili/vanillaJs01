function TodoDeleteAll($app, onDeleteAll){
    //태그 생성
    this.$target = document.createElement("button")
    this.$target.setAttribute("data-component-type", "TodoDeleteAll")
    this.$target.innerText = "모두 삭제"

    //app에 연결
    $app.appendChild(this.$target)
 

    //커스텀 이벤트 생성, removeAll
    let event = new Event('removeAll');

    this.$target.addEventListener('removeAll', function(e){
        console.log('dispatch');
    }, false);
    
    //click 이벤트가 발생하게 되면, removeAll로 정의한 event를 수행
    this.$target.addEventListener("click", ()=>{
        this.$target.dispatchEvent(event);
    });

    //todo list 초기화
    this.handleRemoveall=()=>{
        const isTrueRemoveAll = confirm("TodoList를 모두 초기화 합니다.");
        if(isTrueRemoveAll)
            this.onDeleteAll = onDeleteAll();
        console.log("handleRemoveAll");
    }
    //removeAll 이벤트가 발생시, handleRemoveall 함수 실행
    this.$target.addEventListener("removeAll", this.handleRemoveall);
}

export default TodoDeleteAll;