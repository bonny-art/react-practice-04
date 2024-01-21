import { configureStore } from '@reduxjs/toolkit';
import { todosReduser } from './slice';

export const store = configureStore({
  reducer: { todos: todosReduser },
});
