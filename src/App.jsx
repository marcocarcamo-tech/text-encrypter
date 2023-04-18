import { useState } from 'react'

import InputScreen from './components/InputScreen'
import OutputScreen from './components/OutputScreen'
import EncryptButton from './components/EncryptButton'
import DecryptButton from './components/DecryptButton'
import CopyButton from './components/CopyButton'
import './App.scss'

function App() {

  const [message, setMessage] = useState('');
  const [encryptedMsg, setEncryptedMsg] = useState('');

    const handleChange = event =>{
        setMessage(event.target.value)
        console.log('Value is:', event.target.value );
    }

    function encrypt(){
      let encriptionKeys= {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u:"ufat"
      }
  
      let keys = Object.keys(encriptionKeys);
      let values = Object.values(encriptionKeys);
      console.log(keys, values)
      let original = message;
      let encrypted ="";
      
      //Traverse each character in the original message
      for (let i = 0; i < original.length; i++) {
        //Check if keys includes the current character
        if(keys.includes(original.charAt(i)) ){
          let charFound = original.charAt(i) 
          //Find the index of coincident char in the keys array        
          let charIndex = keys.findIndex(char => charFound == char)
          //Update encrypted string
          encrypted += values[charIndex];
        } else {
          //Concatenate current char to the encrypted strig
          encrypted += original.charAt(i)
        }
      }
      
      setEncryptedMsg(encrypted)
    }

  return (
    <div className="App">
      <div>
        <InputScreen onChange={handleChange}
            value={message}></InputScreen>
        <EncryptButton onClick={encrypt}></EncryptButton>
        <DecryptButton></DecryptButton>
      </div>
      <div>
        <OutputScreen value={encryptedMsg}></OutputScreen>
        <CopyButton></CopyButton>
      </div>
    </div>
  )
}

export default App
