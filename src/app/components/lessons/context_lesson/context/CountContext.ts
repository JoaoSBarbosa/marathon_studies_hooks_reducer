import {createContext} from "react";

// Forma 1 - Etapas de criação, provider e alteraçao separaods
export const InitialCount = 10;

type CountContextType = {
    onlineCount: number | null;
    setOnlineCount: (onlineCount: number | null) => void
}
export const CountContext = createContext<CountContextType | null>(null);