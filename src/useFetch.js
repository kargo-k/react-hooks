import React, { useEffect, useState, useRef } from 'react';

export const useFetch = url => {
  const isCurrent = useRef(true)
  const [state, setState] = useState({ data: null, loading: true })

  useEffect(() => {
    return () => {
      // cleanup function called when cmpt is going to unmount
      isCurrent.current = false;
      // whenever this value is false, the cmpt is going to unmount
    }
  }, [])


  useEffect(() => {
    // sets the state to the current data for a smoother transition
    setState(state => ({ data: state.data, loading: true }));

    fetch(url)
      .then(x => x.text())
      .then(y => {
        setTimeout(() => {
          if (isCurrent.current) {
            setState({ data: y, loading: false })
          }
        }, 2000)
      });

  }, [url, setState])
  // make sure dependencies are not changing when use effect is called

  return state;
}