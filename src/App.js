import React, { useState, useEffect } from 'react';
import { useForm } from './useForm';
import { useFetch } from './useFetch';

const App = () => {

  //? -------------- useFetch custom hook

  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  })

  const [count, setCount] = useState(0);
  const url = `http://numbersapi.com/${count}/trivia`;

  const { data, loading } = useFetch(url)
  // returns the data and a true/false if the data is loading

  return (
    <div>
      <div>{!data ? 'loading...' : data}</div>

      <div>Count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>

      <input
        name='firstName'
        value={values.firstName}
        onChange={handleChange} />

      <input
        name='email'
        value={values.email}
        onChange={handleChange} />

      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange} />

    </div >
  );
}

export default App;
