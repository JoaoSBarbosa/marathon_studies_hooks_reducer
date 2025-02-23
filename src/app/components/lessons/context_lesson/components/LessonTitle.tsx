export const LessonTitle = ({titleProps}:{titleProps: string}) =>{

    return(
        <h1 className={"text-2xl font-medium border-b border-gray-500"}>{ titleProps }</h1>
    )
}