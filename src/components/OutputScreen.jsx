
export default function OutputScreen(props){
    return(
        <div className="output-screen">
            <textarea placeholder="message encrypted / decrypted result" value={props.value} readOnly></textarea>
            <p className="encrytion-notification"></p>
        </div>
        
    )
}