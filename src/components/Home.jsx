import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../actions/homeActions';

function Home() {
    const state = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Home