import {ListType} from "@/app/components/lessons/reducers_lesson/course_class/types/ListType";

type AddAction = {
    action: "add",
    payload:{
        newText: string
    }
}

type EditAction = {
    action: 'edit',
    payload:{
        id: number,
        editText: string
    }
}

type ToggeAction ={
    action: 'toggle',
    payload:{
        id: number,
    }
}
type RemoveAction ={
    action: 'remove',
    payload:{
        id: number,
    }
}

type ReducerAction = ToggeAction | EditAction | AddAction | RemoveAction


export const ListReducer = (list: ListType[], action: ReducerAction): ListType[] =>{

    switch (action.action){
        case "add":
            return [...list,{
                id: list?.length > 0 ? Math.max(...list.map(item => item.id)) +1 : 1,
                value: action?.payload?.newText,
                toggle: false
            }]
        case "edit":
            return list.map(item => item.id === action?.payload?.id ? {...item, value: action.payload.editText}: item);
        case "toggle":
            return list.map(item => item.id === action?.payload?.id ? {...item, toggle: !item.toggle}: item)
        case "remove":
            return list.filter(item => item.id !== action?.payload?.id)
        default:
            return list;

    }

}