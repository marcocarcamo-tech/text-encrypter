import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function InputScreen({onChange, value, errorWarning}){
    
    return(
        <div className='input-screen'>
            <label htmlFor = 'input'>Ecribe el mensaje que desees encriptar o desencriptar <br />
            Debes evitar el uso de mayúsculas o caracteres especiales.</label>
            <textarea 
            id="input"
            placeholder="message I wanna encrypt / decrypt"
            onChange={onChange}
            value ={value}
                    >
            </textarea>
            <div className='warning'>
                <FontAwesomeIcon icon={faXmark} />
                <p className="encryption-notification">{errorWarning}</p>
            </div>
        </div>
        

    )
}