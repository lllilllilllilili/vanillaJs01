import {errorMessage} from "../utils/utils.js"
function TodoInput(params) {
    this.$targetButton = params.$targetButton;
    this.$targetInput = params.$targetInput;
    this.onInput = params.onInput;
    
    this.$targetInput.setAttribute("placeholder", "검색어를 입력해주세요.");
    this.$targetButton.addEventListener("click", (event) => {
      
        const value = this.$targetInput.value.trim();
        if(!value.length)
            throw new Error(errorMessage.CHECK_INPUT());
       
        this.onInput(value);
    });

}

export default TodoInput;
