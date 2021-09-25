import React, { useEffect, useState } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import {getAllItems,addItem,deleteItem} from './redux/actions.js'
import Update from "./Update.js";

const Perso = ()=>{
    const surn = useSelector((state) => state.userStore.Perso);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllItems());
    }, []);

    const [input, setInput] = useState({
        lname:"",
        fname:"",
        surname:"",
        age:"",
        about:""
      });

      const addOne= ()=>{
          dispatch(addItem(input.lname,input.fname,input.surname,input.age,input.about))
      }
      const deleteOne = (id) => {
        dispatch(deleteItem(id));
      };
      return(
        <div className="App">

        <div className="for">
          <div className="Name">Slimi Mehdi</div>
       <form  onSubmit={addOne}>
         <input type="text" placeholder="Nom" onChange={(e)=>setInput({...input,lname:e.target.value})} />
         <input type="text" placeholder="Prenom"onChange={(e)=>setInput({...input,fname:e.target.value})} />
         <input type="text" placeholder="Psudo" onChange={(e)=>setInput({...input,surname:e.target.value})} />
         <input id="age"  type="number" placeholder="Age"onChange={(e)=>setInput({...input,age:e.target.value})} />
         <input type="text" placeholder="Apropos"onChange={(e)=>setInput({...input,about:e.target.value})} />
         <br/><br/>
         <input id="sub" type="submit" />
       </form></div>

       <div className="bod"> 

      {surn.map(i=>(
     <div className="car" key={i.id}> 
     <div className="chead">
       <h1>{i.lname} {i.fname}</h1><hr/></div>
       <div className="cbody">
       <h2>{i.surname}</h2>
       <h3>{i.age}</h3>
       <p>{i.about}</p></div>
       <div className="cfoot">
       <button id="cbtn" onClick={()=>deleteOne(i.id)} > Delete</button>
      <Update i={i} /></div>
     </div>
     
   ))}
   </div>
       
 
      </div>


      );
}

export default Perso