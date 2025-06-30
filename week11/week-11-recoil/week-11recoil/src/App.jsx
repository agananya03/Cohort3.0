import { useEffect, useState, memo } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { jobskatom, messageatom, networkatom, notificationsatom, totalNotificationSelector } from './store/counter';

// function App() {

//   return (
//     <>
//     </>
//   )
// }

// function counter() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setCount(c => c + 1)
//     }, 3000)
//   }, []);

//   return (
//     <div>
//       < Currentcount />
//         <Increase />
//         <Decrease />
//     </div>
//   )
// }

// const Currentcount = memo(function() {
// return <div>

// </div>
// })

// const Increase = memo(function() {
//   function increase(){

//   }
//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// })

// const Decrease = memo(function() {
//   function decrease(){

//   }
//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// })

// function isEven(){
//   const even = useRecoilValue(evenselector)
//   return <div>
//     {even ? "Even" : "Odd"}
//   </div>
// }


function App() {
return <RecoilRoot>
        <Mainapp/>
      </RecoilRoot>
}

function Mainapp() {
  const networkNotificationCount = useRecoilValue(networkatom);
  const jobCount = useRecoilValue(jobskatom);
  const MessagesCount = useRecoilValue(messageatom);
  const NotificationCount = useRecoilValue(notificationsatom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

return( 
<>
  <button>Home</button>
  <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
  <button>Jobs ({jobCount})</button>
  <button>Messages ({MessagesCount})</button>
  <button>Notifications ({NotificationCount})</button>
  <button> Me ({totalNotificationCount}) </button>
</>
)
}
export default App
