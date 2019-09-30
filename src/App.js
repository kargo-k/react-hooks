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

  // ! then we can get the current count from localStorage and set it to state
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
  const url = `http://numbersapi.com/${count}/trivia`;

  const { data, loading } = useFetch(url)
  // returns the data and a true/false if the data is loading

  //! saving to localstorage using a hook!
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

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
