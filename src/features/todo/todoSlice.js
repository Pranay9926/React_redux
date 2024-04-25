import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello all",
    },
    {
      id: 2,
      text: "hello aasdfll",
    },
    {
      id: 3,
      text: "hello alasdfl",
    },
    {
      id: 4,
      text: "hello aldl",
    },
    {
      id: 5,
      text: "hello aldffdl",
    },
    {
      id: 6,
      text: "hello aldfdfl",
    },
  ],
};
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            const todo = {
                id : nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions
// The value we export is the "slice" itself. We can now use this slice to

export default todoSlice.reducer