
export default function OutputScreen(props){
    return(
        <div className="output-screen">
            <textarea placeholder="enterncrypt thimess menterssaigenter" value={props.value} readOnly></textarea>
            <p className="encrytion-notification"></p>
        </div>
        
    )
}