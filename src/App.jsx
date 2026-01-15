
import { useState } from 'react'
import './App.css'
import TaskCard from './TaskCard'

function App() {
const Tasks=[
  {
    baslik:"Title1",
    aciklama:"Description",
    saat:"15.00",
    yapildi: true
  },
    {
    baslik:"Title2",
    aciklama:"Description",
    saat:"17.00",
    yapildi: false
  },
    {
    baslik:"Title3",
    aciklama:"Description",
    saat:"19.00",
    yapildi: true
  },
]


//TODO: hook->ÖZEL FONKSİYON

// const [count,setCount]=useState(10)
// const[user,setUser]=useState({})
// const[isComplated, setIsComplated]=useState(false)
// console.log(user);

// const arttir=()=>{
//   let user1={
//     name:"a",
//     surname:"b",
//     age:1
//   }
//   setUser(user1)
//   setIsComplated(true)
//   setCount(count +1)
// }
// const azalt=()=>{
//   setCount(count-1)
// }
  return (
    <div className='container'>
      <div>
        {Tasks.map((task, index) => (
          <TaskCard
            key={index}
            baslik={task.baslik}
            aciklama={task.aciklama}
            saat={task.saat}
            yapildi={task.yapildi}
          />
        ))}
    </div>

    </div>
  )
  
{/* <div>
  <h1>{count} </h1>
  <h1>{isComplated ? "Tamamlandı" : "tamamlanmadı"} </h1>
<input type="text" onChange={(e)=>console.log(e.target.value)}/>
  <button onClick={arttir}> Arttır</button>
  <button onClick={azalt}>Azalt</button>
</div> */}

  
}

export default App
