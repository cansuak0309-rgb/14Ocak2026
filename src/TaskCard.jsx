import React, { useState } from 'react'
import './TaskCard.css'

function TaskCard({ baslik, aciklama, saat, yapildi }) {

    const [tamamla, setTamamla] = useState(yapildi)
    const onay = () => { setTamamla(true) }

    const [metin, setMetin]=useState("")
    return (
        
        <div className='gorev' style={{ backgroundColor: tamamla ? 'green' : 'red' }} >
          
            <div className='a' style={{ border: "1px solid black" }}>
                <h1>{baslik}</h1>
                <p>{aciklama} </p>
                {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
            <input type="text" onChange={(e) => setMetin(e.target.value)} />
            <p>{metin} </p>
            </div>
            <div className='b' style={{ border: "1px solid black" }}>
                <p style={{ border: "1px solid black" }}>{saat} </p>
                {!tamamla ? <button onClick={onay}>ONAY </button> : ""}
            </div>
           
        </div>
        
    )
}

export default TaskCard
