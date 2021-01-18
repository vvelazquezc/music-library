import { search } from './service/entryAPI.js';
import {searchListeners} from './listeners/listeners.js'


$(document).ready(function(){
    searchListeners();
    
})