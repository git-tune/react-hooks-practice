import React, { useReducer, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'データの取得に失敗しました',
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  });
  return (
    <Container>
      <h1>{state.loading ? 'Loading...' : state.post.title}</h1>
      <h2>{state.error ? state.error : null}</h2>
    </Container>
  );
};

export default App;
