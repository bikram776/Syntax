


export const reducer = (state, action) =>{
    if(action.type === "Home_Update"){
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
        };
    }

    if(action.type === "About_Update"){
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
        };
    }

    if(action.type === "Get_services"){
        return{
            ...state,
            services: action.payload,
        };
    }
    
    return state;

}; 

export default reducer;