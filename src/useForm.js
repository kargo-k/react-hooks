import { useState } from 'react';

// making a custom hook!

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [values, e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }]
}