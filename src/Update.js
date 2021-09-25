
  
import React,{useState} from 'react';
import {updateData} from './redux/actions.js'
import { useDispatch, useSelector } from "react-redux";
import './App.css';



const Update = ({i})=>{
  const dispatch = useDispatch();


    const [newItem,setNewItem] = useState({
        lname:i.lname,
        fname:i.fname,
        surname:i.surname,
        age:i.age,
        about:i.about
    })
    const [input,setInput] = useState({
        lname:"",
        fname:"",
        surname:"",
        age:"",
        about:""
    })

    const updata = ()=>{
      dispatch(updateData(input.id,input.lname,input.fname,input.surname,input.age,input.about))
      }
    
    return(
        <div>

 <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  update
</button>

 <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Change</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="row" id="modal-body">
          <div className="col-md-3">
          Nom: <br/> Prenom: <br/> Psudo: <br/> Age: <br/> A propos:
          </div>
          <div className="col-md-2">
          <form id="ufor" onSubmit={updata}>
     <input id="min" type="text" defaultValue={newItem.lname} onChange={(e)=>{setInput({...input,lname:e.target.value})}} />
     <input  id="min" type="text" defaultValue={newItem.fname} onChange={(e)=>{setInput({...input,fname:e.target.value})}} />
     <input  id="min" type="text" defaultValue={newItem.surname} onChange={(e)=>{setInput({...input,surname:e.target.value})}} />
     <input  id="min" type="number" defaultValue={newItem.age} onChange={(e)=>{setInput({...input,age:e.target.value})}} />
     <input  id="min" type="text" defaultValue={newItem.about} onChange={(e)=>{setInput({...input,about:e.target.value})}} />
     <input id="sub" type="submit" />
         </form>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">OK</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Update