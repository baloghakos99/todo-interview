import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    username: "",
    todos: [],
  },
  reducers: {
    setName: (state, action) => {
      state.username = action.payload;
    },

    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos.splice(
        state.todos.indexOf(
          state.todos.find((x) => x.id === action.payload.id)
        ),
        1
      );
    },
    updateTodo: (state, action) => {
      state.todos.splice(
        state.todos.indexOf(
          state.todos.find((x) => x.id === action.payload.id)
        ),
        1,
        action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTodo, addTodo, removeTodo, setName } = todoSlice.actions;

export default todoSlice.reducer;
