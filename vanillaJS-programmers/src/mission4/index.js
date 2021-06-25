import main from "./main.js"
import {$} from "./utils/utils.js";

(function() {
    
    const app = new main($("app"), {
        data : [],
        username : "",
        isLoading : false,
    });
  })()
