import {ReactNode} from "react";
import {ButtonTabProps} from "@/app/components/types/buttonTabList";


export const ButtonTab = ({ value, icon, onClick}:ButtonTabProps) =>{

    return(
        <button
            onClick={ onClick }
            className={"flex items-center flex-wrap gap-2 p-2 bg-gray-200 hover:bg-gray-300 w-full text-gray-800 rounded-md"}>
            <div>
                { icon }
            </div>
            <div>
                { value }
            </div>
        </button>
    )
}