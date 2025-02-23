import {LessonTitle} from "@/app/components/lessons/context_lesson/components/LessonTitle";
import {LessonSubtitle} from "@/app/components/lessons/context_lesson/components/LessonSubtitle";
import {OnlineContext} from "@/app/components/lessons/context_lesson/components/OnlineContext";
import {CountProvider} from "@/app/components/lessons/context_lesson/context/CountContext2";
import {UserContextProvider} from "@/app/components/lessons/context_lesson/context/UserContext";
import {UserLogged} from "@/app/components/lessons/context_lesson/components/UserLogged";

export const LessonContextContainer = () => {

    return (

        <ul className={" text-gray-800 flex flex-col gap-2"}>
            <CountProvider>
                <li className={" shadow-2xl p-6 rounded-md"}>
                    <LessonTitle titleProps={"Introdução ao Contexto"}/>
                    <LessonSubtitle subtitle={"Aprendendo os conceitos básicos e os exemplos iniciais de Context API."}/>
                    <OnlineContext/>
                </li>
            </CountProvider>

            <UserContextProvider>
                <li className={" shadow-2xl p-6 rounded-md"}>
                    <LessonTitle titleProps={"Exercícios Práticos"}/>
                    <LessonSubtitle subtitle={"Desafios para fixação de conceitos sobre Context e Hooks."}/>
                    <UserLogged/>
                </li>
            </UserContextProvider>

        </ul>

    )
}