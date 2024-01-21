import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction, deleteTodoAction, getTodosSelector } from 'store/slice';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodosSelector);

  const addTodo = text => {
    dispatch(addTodoAction(text));
  };

  const handleSubmit = data => {
    addTodo(data);
  };

  const deleteTodo = id => {
    dispatch(deleteTodoAction(id));
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={deleteTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
