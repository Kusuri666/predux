import {fetchItem,fetchAdd,fetchDeleteItem,updateItem} from './compo.js'

export function getAllItems() {
    return dispatch => {
        fetchItem()
        .then (Perso =>dispatch (
            {type: "GET_SUCCEED",payload: Perso}) 
        )

        .catch(err=>dispatch( {
            type: "GET_FAILED",
            payload: err
          }))
    }

}


export const addItem=(lname,fname,surname,age,about)=> async (dispatch) =>{
    try{
        const res = await fetchAdd(lname,fname,surname,age,about);
        dispatch ({
            type:"ADD_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}


export const deleteItem=(id)=> async (dispatch) =>{
    try{
     await fetchDeleteItem(id);
        dispatch ({
            type:"DELETE_SUCCED",
            payload:id
        })
        console.log("payload")
      }
    catch (error) {
              console.log(error);
             }
}


export const updateData=(id,lname,fname,surname,age,about)=> async (dispatch) =>{
    try{
        const res = await updateItem(id,lname,fname,surname,age,about);
        dispatch ({
            type:"UPDATE_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}