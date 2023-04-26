import InputScreen from './InputScreen'
import OutputScreen from './OutputScreen'
import CopyButton from './CopyButton'
import { useState } from 'react'

export default function Window(){

  const [message, setMessage] = useState('');
  const [outputMsg, setOutputMsg] = useState('');
  const [errorWarning, setErrorWarning] = useState('');
  const [showError, setShowError] = useState(false);
  const [showLocked, setShowLocked] = useState(false);

    const handleChange = event =>{
        setMessage(event.target.value)
    }

    function validateInput (input){
      let error;
      let hasError = true;
      if(message.match(/[^A-Za-z \n]/) && message.match(/[A-Z]/)){
        error = " El mensaje no debe contener letras mayúsculas ni caracteres especiales"
      } else if(message.match(/[A-Z]/)){
        error =" El mensaje no debe contener letras mayúsculas"
      } else if (message.match(/[^A-Za-z0-9 \n]/)){
        error = " El mensaje no debe contener caracteres especiales"
      } else {
        hasError = false;
      }

      if(hasError){
        setOutputMsg('');
        setErrorWarning(error);
        setShowLocked(false);
        setShowError(true);
        
      } else {
        setShowError(false);
        setShowLocked(true);
      }
    }
    

    function encrypt (){
      let original = message;
      let encrypted = 
      original.replace(/e/g, "enter")
              .replace(/i/g, "imes")
              .replace(/a/g, "ai")
              .replace(/o/g, "ober")
              .replace(/u/g, "ufat")
      
      setOutputMsg(encrypted)
      validateInput(encrypted);
      
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
      setShowLocked(false);
      setShowError(false);
    }

    function copyText () {
      navigator.clipboard.writeText(outputMsg).then(
        alert("El texto fue copiado")
      ).catch (error => {
        console.error("Ocurrió un error al copiar.", error)
      })
    }

    return(
        <div className="window">
            <div>
                <div className='titlebar'>
                  <p>Encrypter</p>
                  <button className='x-button'>X</button>
                  </div>
                <InputScreen onChange={handleChange}
                    value={message}
                    errorWarning={errorWarning}
                    showError={showError}
                    showLocked={showLocked}
                    encrypt={encrypt}
                    decrypt={decrypt}
                    ></InputScreen> 
            </div>
            <div>
                <OutputScreen value={outputMsg}></OutputScreen>
                <CopyButton onClick={copyText}></CopyButton>
            </div>
        </div>
    );
}