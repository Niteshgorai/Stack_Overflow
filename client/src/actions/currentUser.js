export const setCurrentUser=(userdata)=>{
    return{
        type: 'FETCH_CURRENT_USER',
        payload: userdata
    }
}