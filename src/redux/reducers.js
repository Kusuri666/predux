const statez = {
    Perso:[]
};

export  const ServicesReducer = (state = statez, action ) => {
    const { type, payload } = action;
    switch( type) {
        case   "GET_SUCCEED" :
            return {
                ...state,
                Perso: payload 
              }
              case   "ADD_SUCCED":
                return {
                    ...state,
                    Perso: [...state.Perso, payload]
              
                   }
                   case   "DELETE_SUCCED":
                    
                    return    {
                       
                       ...state,
                       Perso: state.Perso.filter(data => data.id !=  payload  ) 
                      }
              
             
    }
    
return state
};