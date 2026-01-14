
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
}

export default App
