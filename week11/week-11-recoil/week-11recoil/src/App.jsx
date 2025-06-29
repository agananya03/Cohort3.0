import { useEffect, useState, memo } from 'react'
import './App.css'
import { useRecoilValue } from 'recoil';
import { counteratom } from './store/counter';

function App() {

  return (
    <>
    </>
  )
}

function counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1)
    }, 3000)
  }, []);

  return (
    <div>
      < Currentcount />
        <Increase />
        <Decrease />
    </div>
  )
}

const Currentcount = memo(function() {
return <div>

</div>
})

const Increase = memo(function() {
  function increase(){

  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

const Decrease = memo(function() {
  function decrease(){

  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})

function isEven(){
  const even = useRecoilValue(evenselector)
  return <div>
    {even ? "Even" : "Odd"}
  </div>
}
export default App
