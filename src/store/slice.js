import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { todos: [] };

const getTodosHandler = state => {
  return state.todos;
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoAction: {
      prepare: text => {
        const newTodo = {
          id: nanoid(),
          text,
        };
        return { payload: newTodo };
      },
      reducer: (state, { payload }) => {
        state.todos.push(payload);
      },
    },
    deleteTodoAction: (state, { payload }) => {
      state.todos = state.todos.filter(item => {
        return item.id !== payload;
      });
    },
  },
  selectors: {
    getTodosSelector: getTodosHandler,
  },
});

export const { addTodoAction, deleteTodoAction } = todosSlice.actions;
export const todosReduser = todosSlice.reducer;
export const { getTodosSelector } = todosSlice.selectors;
