import React, { useRef, useEffect, useState } from 'react';
import { useFetch } from './useFetch';

export const Hello = () => {
  const renders = useRef(0);
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
  const url = `http://numbersapi.com/${count}/trivia`;

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const { data, loading } = useFetch(url)

  console.log('hello renders: ', renders.current++);
  // .current allows us to update the value as a reference, which does not cause a re-render

  return <div>
    <div>{!data ? 'loading...' : data}</div>
    <div>Count: {count}</div>
    <button onClick={() => setCount(c => c + 1)}>Increment</button></div>
}