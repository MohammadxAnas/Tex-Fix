import {useState} from 'react';
import './hq.css';

function Home(props) {
 
  let [text,setText]= useState("")
  const toUpper=()=>{
    if(text.length!==0){
      let newtxt=text.toUpperCase();
      setText(newtxt)
    }   
  }
  const toLower=()=>{
    if(text.length!==0){
      let ltext=text.toLowerCase()
      setText(ltext)
    }
  }
  const handleChange=(event)=>{
      setText(event.target.value)
  }
  const cleartxt=()=>{
    if(text.length!==0){
      setText("")
    }
   
  }
  
  const extraSpaces=()=>{
    if(text.length!==0){
      let ntxt=text.split(/[ ]+/);
      setText(ntxt.join(" "))
    }
   
  }
  const cpyText=()=>{
    if(text.length!==0){
      navigator.clipboard.writeText(text)
      alert("Text copied to clipboard!")
    }
   
  }
  
    return(
   <>
      <div className='home' style={props.color}>
      <h1>Enter the text below</h1>
      <div className='txtarea'>
      <textarea style={props.mycolor} placeholder='Enter any text' value={text} onChange={handleChange} rows={8} ></textarea>
      </div>
      <br/>
      <div className='btns'>
      <button className='btn' onClick={toUpper}>Upper</button>
      <button className='btn' onClick={toLower}>Lower Case</button>
      <button className='btn' onClick={cleartxt}>Clear</button>
      <button className='extra' onClick={extraSpaces}>Remove Extra Spaces</button>
      <button className='btn' onClick={cpyText}>Copy Text</button>
      </div>
      <br/>
      < div className='count'>
      <h3>Count-</h3>
      <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0})).length } Words || {(text.length)} Characters</p>
      </div>
      <div className='time'>
        <h3>Reading Time-</h3>
        <p>{((text.split(/\s+/).filter((element)=>{return element.length!==0})).length)*0.4 } Seconds</p>
      </div>
      <br/>
    
      </div>  
   </>
    )
}
export default Home