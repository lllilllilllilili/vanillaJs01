function SearchHistory({$app, $state, onSearchHistory}){
    this.$app = $app;
    this.onSearchHistory = onSearchHistory;
    this.$state = $state;
    this.$searchKeyword = '';
    const searchHistoryWrapper = document.createElement("div");
    searchHistoryWrapper.className = "search-history-wrapper";
    this.element = searchHistoryWrapper;
    
    if(!new.target)
        throw new Error(errorMessage.CHECK_NEW_ERROR());


    this.setState = (nextState) => {
        this.$state = nextState;
        this.render(this.$state);

    }

    this.render = (state) => {
        searchHistoryWrapper.innerHTML = `
        <ul class="search-history">
        ${state.searchHistory.map( (d) => { 
                
                const className = `search-history-element ${ this.$searchKeyword === d ? 'current' : '' }`.trimEnd();
                return `<li class="${className}">${d}</li>`;
                    
                }).join('')}
        </ul>                                        
        `;
    }

    this.clickSearchHistory = (li) => {
        this.$searchKeyword = li.innerText;
        this.onSearchHistory(li.innerText);
    }

    searchHistoryWrapper.addEventListener("click", (event) => {
        
        const {classList} = event.target
        if(classList.contains("search-history-element"))
            this.clickSearchHistory(event.target.closest("li"));
    });

    

}

export default SearchHistory;