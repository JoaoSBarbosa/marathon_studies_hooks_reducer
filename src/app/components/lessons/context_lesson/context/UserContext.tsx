import {createContext, ReactNode, useState} from "react";
type UserContextProps ={
    userLogged: string;
    setUserLogged: ( userLogged: string) => void
}

export const UserContext = createContext<UserContextProps | null>(null);

interface IUserContextProvider{
    children: ReactNode
}
export const UserContextProvider = ({ children}: IUserContextProvider) =>{
    const [ userLogged, setUserLogged ] = useState("")
    return(
        <UserContext.Provider value={{ userLogged, setUserLogged  }}>
            { children }
        </UserContext.Provider>
    )
}