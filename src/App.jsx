import { useState } from 'react'

import InputScreen from './components/InputScreen'
import OutputScreen from './components/OutputScreen'
import EncryptButton from './components/EncryptButton'
import DecryptButton from './components/DecryptButton'
import CopyButton from './components/CopyButton'
import './App.scss'

function App() {
  
  const [message, setMessage] = useState('');
  const [outputMsg, setOutputMsg] = useState('');

    const handleChange = event =>{
        setMessage(event.target.value)
    }

    function encrypt (){
      
      let original = message;
      if(message.match(/[^A-Za-z]/) && message.match(/[A-Z]/)){
        alert("El mensaje no debe contener letras mayúsculas ni caracteres especiales")
        return;
      } else if(message.match(/[A-Z]/)){
        alert("El mensaje no debe contener letras mayúsculas")
        return;
      } else if (message.match(/[^A-Za-z0-9]/)){
        alert("El mensaje no debe contener caracteres especiales")
        return;
      }

      let encrypted = 
      
      original.replace(/e/g, "enter")
              .replace(/i/g, "imes")
              .replace(/a/g, "ai")
              .replace(/o/g, "ober")
              .replace(/u/g, "ufat")
      
      setOutputMsg(encrypted)
    }
    
    function decrypt (){
      let original = message;
      let decrypted = 
      original.replace(/enter/g, "e")
              .replace(/imes/g, "i")
              .replace(/ai/g, "a")
              .replace(/ober/g, "o")
              .replace(/ufat/g, "u")
      
      setOutputMsg(decrypted)
    }

    function copyText () {
      navigator.clipboard.writeText(outputMsg).then(
        alert("El texto fue copiado")
      ).catch (error => {
        console.error("Ocurrió un error al copiar.", error)
      })
    }
    
  return (
    <div className="App">
      <div>
        <InputScreen onChange={handleChange}
            value={message}></InputScreen>
        <EncryptButton onClick={encrypt}></EncryptButton>
        <DecryptButton onClick={decrypt}></DecryptButton>
      </div>
      <div>
        <OutputScreen value={outputMsg}></OutputScreen>
        <CopyButton onClick={copyText}></CopyButton>
      </div>
    </div>
  )
}

export default App
