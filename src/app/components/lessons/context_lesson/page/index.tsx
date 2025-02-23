import {BlogHeader} from "@/app/components/lessons/context_lesson/components/BlogHeader";
import {CountContext, InitialCount} from "@/app/components/lessons/context_lesson/context/CountContext";
import {useState} from "react";
import {CountContext2, CountProvider} from "@/app/components/lessons/context_lesson/context/CountContext2";

export const ContextLesson = () => {

    const [onlineCount, setOnlineCount] = useState<number | null>(25)
    return (

        // Método 1
        // <CountContext.Provider value={{ onlineCount, setOnlineCount}}>
        //     <BlogHeader/>
        // </CountContext.Provider>

        <CountProvider>
            <BlogHeader/>
        </CountProvider>
    )
}