import { GET_DATA } from "../Actions";

const initialState={
    products:[]  ,
    product:{},

  }

  export const reducer=(state=initialState,{type,payload})=>{
    console.log(state,"products")
  switch(type){
      case GET_DATA:
          return {...state,products:payload,loading:false};
         
         
      
          case GET_PROD_DETAILS:
          return {...state,product:payload};
  
        

          
          default:
              return state;
  
  }
  }