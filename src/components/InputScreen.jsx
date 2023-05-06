import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import EncryptButton from './EncryptButton'
import DecryptButton from './DecryptButton'

import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons'

function ErrorMessage({showError, errorWarning}){
    if(showError){
        return (<div className='warning'>
                <FontAwesomeIcon className="error-icon"  icon={faXmark} />
            <p className="encryption-notification">{errorWarning}</p>
    </div>)
    }
}

function LockIcon({showLocked}){
    if(showLocked){
        return(
            <FontAwesomeIcon className="lock-icon" icon={faLock} />
        )
    } else {
        return(
        <FontAwesomeIcon className="lock-icon" icon={faLockOpen} />
        )
    }
}
export default function InputScreen({onChange, value, errorWarning, showError, showLocked, encrypt, decrypt}){

   
    
    return(
        <div className='input-screen'>
            <label htmlFor = 'input'>Escribe el mensaje que desees encriptar o desencriptar <br />
            Debes evitar el uso de mayúsculas o caracteres especiales.</label>
            <textarea 
            id="input"
            placeholder="message I wanna encrypt / decrypt"
            onChange={onChange}
            value ={value}
                    >
            </textarea>
            <ErrorMessage showError={showError} errorWarning={errorWarning}></ErrorMessage>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <EncryptButton encrypt={encrypt}></EncryptButton>
                <LockIcon showLocked={showLocked}></LockIcon>
                <DecryptButton decrypt={decrypt}></DecryptButton>
            </div>
        </div>
        

    )
}