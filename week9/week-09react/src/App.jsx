import { useState,useEffect } from 'react'

//conditional rendering
function App() {
  let {counterVisible, setCounterVisible} = useState(true);

  useEffect(function(){
    setInterval(function() {
      setCounterVisible(c => !c)
    },5000);
  }, [])
  return <div>
    {counterVisible ? <counter></counter>: null}
  </div>
}

//mounting, re-rendering
function counter(){
  const [count, setCount] = useState(0);

  useEffect(function() {
   let clock = setInterval(function() {
      setCount(c => c + 1); //calling function instead of count+1 because of dependancy array
    }, 1000);
    return function(){
    clearInterval(clock); //stops the clock whenever function unmounts
    }
  }, []); //dependancy array []

  function increasecount(){
    setCount(count + 1);
  }

  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increasecount}>Increase count</button>
  </div>
}

export default App
