
import Navbar from './components/navbar';
import About from './components/about';
import Home from './components/home';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [mode,setMode]=useState("Light Mode");
  let [color,setcolor]=useState({
    backgroundColor: '#f5ebe0',
    color: '#3d5a80',
  })
  let [mycolor,setmycolor]=useState({
    backgroundColor: '#edede9',
    color: 'black',
  })
  const bgcolor=()=>{
    setInterval(() => {
      document.title='SHEELA❤️';  
    },1000);
    setInterval(()=>{
      document.title='10+Messages!!';
    },1500);
   
    if(color.backgroundColor==='#f5ebe0'){
      setcolor({
        backgroundColor: '#3d5a80',
        color: '#e0fbfc'
      })
      setmycolor({
        backgroundColor: '#8d99ae',
        color: 'white',
      })
      setMode("Light Mode")
    }
    else{
      setcolor({
        backgroundColor: '#f5ebe0',
    color: '#3d5a80'
      })
      setmycolor({
        backgroundColor: '#edede9',
        color: 'black',
      })
      setMode("Dark Mode")
    }
    
  }
const router=createBrowserRouter([
    {
      path:"/",
      element: <><Navbar mode={mode} color={color} bgcolor={bgcolor}/><Home color={color} mycolor={mycolor}/></>
    },
    {
      path:"/About",
      element: <><Navbar  mode={mode} color={color} bgcolor={bgcolor}/><About color={color} /></>
    },
  ])
  return (  
    <>
    <RouterProvider router={router} /> 
    </>
  );
}

export default App;
