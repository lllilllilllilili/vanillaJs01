export const useDebounceFunction = (callback, waitTime) => {
  
    return function(...args){
    
      if(this.timer){
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
          callback(...args);
        },waitTime);
      }
  }