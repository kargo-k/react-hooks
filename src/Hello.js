import React, { useRef } from 'react';

export const Hello = () => {
  const renders = useRef(0);

  console.log('hello renders: ', renders.current++);
  // allows us to update the value as a reference, which does not cause a re-render

  return <div>Hello</div>
}