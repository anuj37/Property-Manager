import { ADD_LIST } from "./addTypes";
import { DEL_LIST } from "./deleteTypes";

const intialState = {
      items:[]
}

const reducer = (state = intialState,action) => {
      console.log("payload",action.payload);
      // console.log("state",state);
      switch(action.type){
            case ADD_LIST : return{
                  ...state,
                  items:state.items.concat(action.payload)
                  // items:state.items.push(action.payload)
                  // items: state.items.push(action.payload)
            }
            case DEL_LIST : return{
                  ...state,
                  items:state.items.splice(1)
                  // items:state.items.pop()
                  // item: [ ...state.items.slice(0, 1),
                        // ...state.items.slice(1 + 1)]
            }
            default : return state;
      }
}

export default reducer;