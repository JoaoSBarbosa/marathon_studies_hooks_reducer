import {BlogTitle} from "@/app/components/lessons/context_lesson/components/BlogTitle";
import {BlogSubtitle} from "@/app/components/lessons/context_lesson/components/BlogSubtitle";
import {UserLogged} from "@/app/components/lessons/context_lesson/components/UserLogged";

export const BlogHeader = () =>{

   return(
      <header className={" text-gray-800 flex flex-col gap-2"}>
          <BlogTitle/>
          <BlogSubtitle/>
          <UserLogged/>
      </header>
   )
}