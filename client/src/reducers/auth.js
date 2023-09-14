const authReducer=(state={}, action)=>{
  switch (action.type) {
      case 'AUTH':
          localStorage.setItem('Profile', JSON.stringify(...action.data));
          return {...state, data: action.data};
          case "LOGOUT":
            localStorage.clear();
            return { ...state, data: null };
      default:
          return state
  }
}

export default authReducer




// const initialState = {
//     data: null,
//     isAuthenticated: false,
//   };
  
//   const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'AUTH':
//         localStorage.setItem('Profile', JSON.stringify(action.data));
//         return {
//           ...state,
//           data: action.data,
//           isAuthenticated: true, // Set to true to indicate the user is authenticated.
//         };
  
//       default:
//         return state;
//     }
//   };
  
//   export default authReducer;
 
  
  
  
  
  



