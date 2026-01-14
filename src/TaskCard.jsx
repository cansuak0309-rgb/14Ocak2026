import React from 'react'
import './TaskCard.css'

function TaskCard({ baslik, aciklama, saat, yapildi }) {
    return (
        <div className='gorev' style={{ backgroundColor: yapildi ?  'green':'red' }} >
            <div className='a' style={{ border: "1px solid black" }}>
                <h1>{baslik}</h1>
                <p>{aciklama} </p>
            </div>
            <div className='b' style={{ border: "1px solid black" }}>

                <p style={{ border: "1px solid black" }}>{saat} </p>
                {!yapildi ? <button>ONAY </button> : ""}

            </div>
        </div>
    )
}

export default TaskCard
