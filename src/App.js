import React, { useState, useEffect } from 'react';
import { useForm } from './useForm';

const expensiveInitialState = () => {
  return 10
}

const App = () => {

  //? -------------- useState, for updating State

  // callback to an anonymous function so that the expensiveInitialState() is only called once. otherwise will get called every time the component App is rendered
  // const [count, setCount] = useState(() => expensiveInitialState)

  // useState returns an array and it is typicall destructured into [value, function]
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 })
  // able to use useState as many times as you want
  // const [count3, setCount3] = useState({ count3: 20 })

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // using a custom hook
  const [values, handleChange] = useForm({ emailCustom: "", passwordCustom: "" })

  //? -------------- useEffect, every time component renders, function is called.
  // the second parameter, the array, are the values that the useEffect is dependent on.  so when values.password is passed in, the useEffect is only used when the values.passwordCustom is changed. does a shallow comparison. can replace componentdidmount and componentwillunmount with this

  useEffect(() => {
    console.log('render in use effect');

    // this is the clean up function
    return () => {
      console.log("cleaning up old value...")
    }
  }, [values.passwordCustom, password])

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}

      {/* Can pass an updated function into setCount. Helps prevent updates getting overwritten */}
      <button
        onClick={() => setCount(currentState => (
          { ...currentState, count: currentState.count + 1 }))}>
        +
      </button>
      <div>Count 1: {count}</div>
      <div>Count 2: {count2}</div>

      <input name='email' value={email} onChange={e => setEmail(e.target.value)} />

      <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />

      <p>Form using custom hook</p>

      <input
        name='emailCustom'
        value={values.emailCustom}
        onChange={handleChange} />

      <input
        type='password'
        name='passwordCustom'
        value={values.passwordCustom}
        onChange={handleChange} />

    </div >
  );
}

export default App;
