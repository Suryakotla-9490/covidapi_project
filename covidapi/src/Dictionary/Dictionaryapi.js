import React, { useState } from 'react'


export default function Dictionaryapi() {
    const [data,setData]=useState([])
    const [word, setWord]=useState('')
    function api()  {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response =>{
            return response .json();
        }).then(data=>{
            console.log(data)
            setData(data)
        })
    }
    
    
  return (
    <div>
       <input type="text" onChange={(e)=>setWord(e.target.value)}/>
       <button onClick={()=>api()}>CLICK</button>
    
    </div>
  )
}
