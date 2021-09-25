import axios from 'axios'

 export const fetchItem = () =>
axios
  .get(`http://localhost:3002/Perso`)
  .then((res) => res.data);


  export const fetchAdd = (lname,fname,surname,age,about)=>{
      axios.post(`http://localhost:3002/Perso`,{lname,fname,surname,age,about}).then(res=>{
          console.log(res.data )
      })
  }


  export const fetchDeleteItem = (id) =>
axios.delete(`http://localhost:3002/Perso/${id}`).then((res) => res.data);


export const updateItem=(id,lname,fname,surname,age,about)=>{
    axios.put(`http://localhost:3002/Perso/${id}`,{lname,fname,surname,age,about}).then(res=>res.data) 
}