import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from "./Reducer";




const AppContext = createContext();

const API = "https://testapi.io/api/dalax/https://testapi.io/api/dalax/%7Bsync%7D";

const initialState = {
    name: " ",
    image: " ",
    services: [ ],
};




const AppProvider = ({children}) => {

    const [state, deploy] = useReducer(reducer,initialState);

    const updateHomepage = () => {
        return deploy({
            type: "Home_Update",
            payload: {
                name: "Syntax..",
                image: "./images/hero.svg",
            },
        
        }
            );
    };
    
    const updateAboutpage = () =>{ 
        return deploy({
            type: "About_Update",
            payload: {
                name: "Syntax memoir",
                image: "./images/about1.svg",
            },
        
        }
            );
    };
// to get the api
const getServices = async (URL) =>{
    try{
        const ress = await fetch(URL);
        const data =  await ress.json();
        deploy({type: "Get_services", payload: data });
    }
    catch{Error}
    {
        console.log(Error);
    }
};



// to call the api

 useEffect(() => {
     getServices(API);
 }, []);


    return <AppContext.Provider value={{...state, updateHomepage, updateAboutpage}}>
        { children}
    </AppContext.Provider>
};

const useAllcontext = () => {
    return useContext(AppContext)
};


export { AppContext, AppProvider, useAllcontext};