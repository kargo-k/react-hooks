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

  // ? --------------- useRef
  const inputRef = useRef()
  const [showHello, setShowHello] = useState(true)




  return (
    <div>
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
