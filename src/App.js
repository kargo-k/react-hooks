import React, { useState, useEffect, useRef } from 'react';
import { useForm } from './useForm';
import { useFetch } from './useFetch';
import { Hello } from './Hello';

const App = () => {

  //? -------------- useFetch custom hook

  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  })

  // ! then we can get the current count from localStorage and set it to state.  Using the initializer function of use State will prevent getting the count from localStorage every time.  will only call when it is rendered the first time!
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
  const url = `http://numbersapi.com/${count}/trivia`;

  const { data, loading } = useFetch(url)
  // returns the data and a true/false if the data is loading

  // ? --------------- useRef
  const inputRef = useRef()
  const [showHello, setShowHello] = useState(true)


  //! saving to localstorage using a hook!
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{!data ? 'loading...' : data}</div>

      <div>Count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>

      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}

      <input
        ref={inputRef} // gives us access to the reference
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

      <button onClick={() => inputRef.current.focus()}>Focus</button>
      {/* this gives us access to the DOM node */}

    </div >
  );
}

export default App;
