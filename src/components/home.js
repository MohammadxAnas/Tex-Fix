import {useState} from 'react';
import './hq.css';

function Home(props) {

    let [selectedText, setSelectedText] = useState('');
    const handleMouseUp = (event) => {
      const textarea = event.target;
      const stdtext = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
      setSelectedText(stdtext);
      console.log(selectedText);
      const toolkit = document.getElementById('toolkit');
      if(selectedText){
      const range = window.getSelection().getRangeAt(0);
      const rect = range.getBoundingClientRect();
      toolkit.style.left = `${rect.left + window.scrollX}px`;
      toolkit.style.top = `${rect.bottom + window.scrollY}px`;
      toolkit.classList.remove('hidden');
      }
      else {
        toolkit.classList.add('hidden');
      }
  }
   
 
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
  const copy=()=>{
    navigator.clipboard.writeText(selectedText)
      alert("Text copied to clipboard!")
  }
    return(
   <>
   <div id="toolkit" className="toolkit hidden">
      <button className='btn' onClick={toUpper}>Upper</button>
      <button className='btn' onClick={toLower}>Lower Case</button>
      <button className='btn' onClick={cleartxt}>Clear</button>
      <button className='extra' onClick={extraSpaces}>Remove Extra Spaces</button>
      <button className='btn' onClick={cpyText}>Copy Text</button>
      </div>
      <div className='home' style={props.color}>
      <h1>Enter the text below</h1>
      <div className='txtarea'>
      <textarea id='myTextarea' style={props.mycolor} placeholder='Enter any text' value={text} onChange={handleChange} rows={8} onMouseUp={handleMouseUp} ></textarea>
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