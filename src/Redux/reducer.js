const initialState = {
    tasks:[]
 }
 
 export const todoReducer = (state = initialState,action)=>{
     switch (action.type) {
         case "add":
             return{
                 ...state,
                 tasks:[...state.tasks,action.payload]
             }
             case "delete":
                 return{
                     ...state,
                     tasks:state.tasks.filter((el)=>el.id!==action.id)
                 }
             case "edit":
                return{
                    ...state,
                    tasks: state.tasks.map((el)=>el.id=action.payload.id?{...el,name:action.payload.text}:el)
                }

            default:
           return state;
     }
 }