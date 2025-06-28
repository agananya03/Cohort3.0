import { useState } from 'react'
import './App.css'
//import {useFetch} from "./hooks/useFetch";
import {usePrev} from "./hooks/usePrev";


function App() {
  // const { finaldata } = useFetch("https://www.google.com/");
  // return (
  //     <div>
  //      {JSON.stringify(finaldata)}
  //     </div>
  // )

  /////useprev hook is used to access the previous value

  const [state, setstate] = useState(0);
  const prev = usePrev(state);

  return (
    <>
    <p>{state}</p>
    <button onClick={() => {
      setstate((curr) => curr + 1)
    }}>Click ME
    </button>
    <p>The prev value was {prev}</p>
    </>
  );
}

export default App
