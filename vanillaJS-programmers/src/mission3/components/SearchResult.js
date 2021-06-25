function SearchResult(data, $app){
    this.$state = data;
    this.$app = $app;
    if(!new.target)
        throw new Error(errorMessage.CHECK_NEW_ERROR());

    const searchResultWrapper = document.createElement("div");
    searchResultWrapper.setAttribute("class", "search-result-wrapper");
    this.element = searchResultWrapper;

    this.setState = (nextState) => {
        this.$state = nextState;
        this.render(this.$state);    
    }

    this.render = (state) => {
        
        if(state.isLoading === false){

            searchResultWrapper.innerHTML = `<div class="message">로딩중입니다...</div>`
        
        }else if(state.data.length === 0){

            searchResultWrapper.innerHTML = `<div class="message">검색 결과가 없습니다.</div>`
        
        }else{
            searchResultWrapper.innerHTML = `
                <ul class="search-result">
                ${state.data.map(data => 
                    `<li class="gif-wrapper">
                        ${data.imageUrl ? `<img src="${data.imageUrl}"/>` : `<p>이미지가 없습니다.</p>`}
                    </li>
                `).join('')}
                </ul>
                `
        }
    }
}
export default SearchResult;