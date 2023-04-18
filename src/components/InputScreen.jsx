import { useState } from 'react';


export default function InputScreen(props){
    
    return(
        <textarea placeholder="message I wanna encrypt / decrypt"
                
                onChange={props.onChange}
                value ={props.value}
                >
        </textarea>

    )
}