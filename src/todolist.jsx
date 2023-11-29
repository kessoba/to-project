import React from 'react'
import './App.css';
import { useState,useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"

 

export default function Todolist() {

  const [listes, setListes] = useState([])
  const inputRef = useRef()

   function AjoutTask() {
    const text = inputRef.current.value;
    setListes([...listes,text])
    inputRef.current.value ='';

   };
   function Supp(index) {
    let supp = [...listes];
    supp.splice(index, 1)
    setListes(supp)
    
   };
  
  return (
<div className='body'>

    <div className='container corp text-white py-5'>
      <div className=''><img src="./images/group.png" alt="" /></div> 
      <div className='row justify-content-center text-center'>    
    <h1 className='text-white'> TO-DO-NOW</h1>
    <div className='div col-md-8'>
      <div className='one'></div>
      <div><i class="bi bi-pencil-square text-white fs-3"></i></div>
      <div className='two'></div>
    </div>

          <div class="col-md-8 mt-5 ">
          <div class=" d-flex mb-3 rounded-5">
          <input type="text" ref={inputRef} className="form-control rounded-4 input " placeholder="Add Task"/>
          
          <button type='submit' className="text-white  rounded-4 but " onClick={AjoutTask} >Ajouter</button>
          
          </div>
          </div>
          <div className='mt-5 col-md-8'>
            
            <ul className="Tasks ">
          {listes.map((text, index) => {
            return (
              <li className='d-flex mb-3 rounded-5  bg-dark text-start' key={index}>
                <div className='w-100  text-break p-3'>{text}</div>
              <div className=''>
                <button onClick={() => Supp(index)} className="trash text-secondary text-end m-2 fs-3 rounded-5 ">
                <i class="bi bi-trash "></i>
                </button>
              </div>
              </li>
          );
        })}
      </ul>
    </div>


      </div>
    </div>
    </div>
  )
}

