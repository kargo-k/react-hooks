import React, { useEffect, useState } from 'react';

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true })

  useEffect(() => {
    // sets the state to the current data for a smoother transition
    setState(state => ({ data: state.data, loading: true }));

    fetch(url)
      .then(x => x.text())
      .then(y => {
        setState({ data: y, loading: false })
      });

  }, [url, setState])
  // make sure dependencies are not changing when use effect is called

  return state;
}