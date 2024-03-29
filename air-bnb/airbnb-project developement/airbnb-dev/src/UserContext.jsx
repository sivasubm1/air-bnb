import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {createContext} from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
      if(!user) {
        console.log('profile here', user);
        axios.get('/profile').then(({data}) => {
          setUser(data);
          setReady(true);
        });

      }
    },[]);
    return (
        <UserContext.Provider value={{user, setUser, ready, setReady}}>
         {children}
        </UserContext.Provider>    
    );   
}