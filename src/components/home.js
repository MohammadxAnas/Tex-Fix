import {useState,useRef,useEffect} from 'react';
import './hq.css';

function Home(props) {
  const [selectedText, setSelectedText] = useState('');
  const textarearef = useRef(null);
  const toolkitref = useRef(null);
  const mirrorDivRef = useRef(null);

  useEffect(() => {
    if (selectedText) {
      const textarea = textarearef.current;
      const mirrorDiv = mirrorDivRef.current;

      mirrorDiv.innerHTML = textarea.value.substring(0, textarea.selectionStart)
        + `<span id="highlighted">${textarea.value.substring(textarea.selectionStart, textarea.selectionEnd)}</span>`
        + textarea.value.substring(textarea.selectionEnd);
      
      const highlightSpan = mirrorDiv.querySelector("#highlighted");
      if (highlightSpan) {
        const rect = highlightSpan.getBoundingClientRect();
        
        // Adjust toolkit position for more precise alignment
        const toolkit = toolkitref.current;
        console.log(toolkit)
        toolkit.style.left = `${rect.left+90}px`;
        toolkit.style.top = `${rect.top-388}px`; // smaller offset below text
        
        toolkit.classList.remove('hidden');
      }
    }
  }, [selectedText]);

  const handleMouseUp = () => {
    const textarea = textarearef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== end) {
      setSelectedText(textarea.value.substring(start, end));
    } else {
      setSelectedText('');
      toolkitref.current.classList.add('hidden');
    }
  };
   
 
  let [text,setText]= useState("")
  const toUpper=()=>{
    let textarea= textarearef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    textarea.value = text.slice(0, start) + text.slice(start, end).toUpperCase() + text.slice(end);
    textarea.focus();
    setSelectedText('');
  }
  const toLower=()=>{
    let textarea= textarearef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    textarea.value = text.slice(0, start) + text.slice(start, end).toLowerCase() + text.slice(end);
    textarea.focus();
    setSelectedText('');
  }
 
  const cleartxt=()=>{
    let textarea= textarearef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    textarea.value = text.slice(0, start) + text.slice(end);
    textarea.focus();
    setSelectedText('');
  }
  
  const extraSpaces=()=>{
    let textarea= textarearef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    let ntxt=text.slice(start,end).split(/[ ]+/).join(" ");

    textarea.value = text.slice(0, start) + ntxt + text.slice(end);
    textarea.focus();
    setSelectedText('');
  }
  const cpyText=()=>{
    if(selectedText.length!==0){
      navigator.clipboard.writeText(selectedText)
      alert("Text copied to clipboard!")
    }
  }
  
    return(
   <>
   <div id="toolkit" ref={toolkitref} className="toolkit hidden">
      <button className='btn' onClick={toUpper}>Upper Case</button>
      <button className='btn' onClick={toLower}>Lower Case</button>
      <button className='btn' onClick={cleartxt}>Clear</button>
      <button className='extra' onClick={extraSpaces}>Remove Extra Spaces</button>
      <button className='btn' onClick={cpyText}>Copy Text</button>
      </div>
      <div className='home' style={props.color}>
      <h1>Enter the text below</h1>
      <div className='txtarea'>
      <textarea id='myTextarea' style={props.mycolor} placeholder='Enter any text' ref={textarearef} rows={8} onMouseUp={handleMouseUp} ></textarea>
      </div>
      <br/>
      
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
      <div
        ref={mirrorDivRef}
        className="mirror-div"
        aria-hidden="true"
      ></div>
      </div>  
   </>
    )
}
export default Home