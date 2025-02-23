import {UserContext} from "@/app/components/lessons/context_lesson/context/UserContext";

interface ILessonSubtitle{
    subtitle: string
}
export const LessonSubtitle = ({ subtitle }:ILessonSubtitle) =>{
    return(
        <p>{ subtitle }</p>
    )
}