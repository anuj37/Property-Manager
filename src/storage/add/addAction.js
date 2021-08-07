import { ADD_LIST } from "./addTypes";

export const addList = item =>{
      return {
            type : ADD_LIST,
            payload : item
      }
}