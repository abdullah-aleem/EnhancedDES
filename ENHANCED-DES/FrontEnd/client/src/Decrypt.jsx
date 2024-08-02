
import React, { useState } from 'react'
import axios from 'axios'
function Decrypt() {
  const [cypherText, setCypherText] = useState('')
  const [key, setKey] = useState('')
  const [text, setText] = useState('') 
  async function handlesubmit(){

    
    try{
    
      const {data}=await axios.post('/decrypt',{cypherText,key})
      setText(data['result'])
      alert('Successfully decrypted')
    }catch(e){
      alert('Could not reach server. Please try again later.',e);
    }
    
  }
  return (
    <div className='flex items-center justify-center flex-grow'>
      <div className=' w-10/12  bg-gray-600 bg-opacity-50 rounded-3xl m-2 flex flex-col items-center justify-center gap-4 ' style={{height:600}}>
        <input type="text"  placeholder='Enter cypherText to decrypt' value={cypherText} onChange={(e)=>{setCypherText(e.target.value)}} />
        <input type="text"  placeholder='Enter key for decryption' value={key} onChange={(e)=>{setKey(e.target.value)}}/>
        <textarea readOnly value={text}/>
        <button onClick={()=>handlesubmit()}>Decrypt</button>
      </div>
    </div>
  )
}

export default Decrypt