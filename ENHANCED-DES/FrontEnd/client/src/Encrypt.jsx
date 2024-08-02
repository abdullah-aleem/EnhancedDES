import React,{useState} from 'react'
import axios from 'axios'
function Encrypt() {
  const [text, setText] = useState('')
  const [key, setKey] = useState('')
  const [textArea, setTextArea] = useState('')
  async function handleSubmit(){
    if(text && key){
      try{
        const {data}=await axios.post('/encrypt',{plaintext:text,key})
        setTextArea(data['result'])
        alert('Successfully decrypted')
      }catch(e){
        alert('Could not reach server. Please try again later.');
        console.log(e)
      }
    }
    else{
      alert('please enter text and key')
    }
    
  }
  return (
    <div className='flex items-center justify-center flex-grow'>
      <div className=' w-10/12  bg-gray-600 bg-opacity-50 rounded-3xl m-2 flex flex-col items-center justify-center gap-4' style={{height:600}}>
        <input type="text"  placeholder='Enter text to encrypt'  value={text} onChange={(e)=>{setText(e.target.value)}}/>
        <input type="text"  placeholder='Enter key for encryption' value={key} onChange={(e)=>{setKey(e.target.value)}} />
        <textarea readOnly value={textArea}/>
        <button onClick={()=>handleSubmit()}>Encrypt</button>
      </div>
    </div>

  )
}

export default Encrypt