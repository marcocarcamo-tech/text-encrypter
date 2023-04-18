
import { useState } from "react";

export default function OutputScreen(props){

    return(
        <textarea placeholder="message encrypted / decrypted result" value={props.value} readOnly>

        </textarea>
    )
}