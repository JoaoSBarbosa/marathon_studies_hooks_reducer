import {createContext, ReactNode, useState} from "react";

// Forma 2 - udo unificado
type CountContextType = {
    onlineCount: number;
    setOnlineCount: (onlineCount: number) => void
}
export const CountContext2 = createContext<CountContextType | null>(null);

type CountProviderProps ={
    children: ReactNode
}
export const CountProvider = ({ children }:CountProviderProps)=>{

    const [ onlineCount, setOnlineCount ] = useState<number>(25)

    return(
        <CountContext2.Provider
            value={ { onlineCount, setOnlineCount}}
        >
            { children }
        </CountContext2.Provider>
    )
}