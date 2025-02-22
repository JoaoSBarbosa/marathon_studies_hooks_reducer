'use client'

import {useReducer, useState} from "react";
import {ListReducer} from "@/app/components/lessons/reducers_lesson/course_class/reducers/ListReducer";
import {ListType} from "@/app/components/lessons/reducers_lesson/course_class/types/ListType";

export const ItemsData = () => {
    const [list, dispatch] = useReducer(ListReducer, []);
    const [editValue, setEditValue] = useState("");
    const [itemValue, setItemValue] = useState("");
    const [ isEdit, setIsEdit ] = useState(false);

    const [ itemEditSelected, setItemEditSelected] = useState<ListType | null>(null)

    const handleSHowEdit = (item: ListType) =>{
        if( item ){
            setIsEdit(true);
            setItemEditSelected(item);
            setEditValue( item?.value )
        }

    }
    const handleAdd = () => {
        if (!itemValue.trim()) return;
        dispatch({action: "add", payload: {newText: itemValue}});
        setItemValue("");
    };

    const handleEdit = () =>{
        if( !editValue.trim() || !itemEditSelected) return;
        dispatch({
            action: 'edit',
            payload:{
                id: itemEditSelected?.id,
                editText: editValue
            }
        })
        setIsEdit(false)
        setItemEditSelected(null)
        setEditValue("");
    }
    return (
        <div className="w-full flex flex-col items-center p-4 bg-gray-100 h-full">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Tarefas</h1>

            {/* Input e Botão */}
            <div className="w-full max-w-6xl  bg-white shadow-md rounded-lg p-4 flex">
                <input
                    className="flex-grow p-2 border text-gray-800 border-gray-300 rounded-l-md focus:outline-none"
                    value={itemValue}
                    onChange={(e) => setItemValue(e.target.value)}
                    placeholder="Ex.: Estudar React"
                />
                <button
                    className="w-24 bg-green-500 text-white rounded-r-md hover:bg-green-600 transition"
                    onClick={handleAdd}
                >
                    Adicionar
                </button>
            </div>

            {/* Tabela */}
            <div className="w-full max-w-6xl mt-6">
                <div className="overflow-hidden border border-gray-300 rounded-lg shadow-md">
                    <table className="w-full border-collapse bg-white">
                        <thead>
                        <tr className="bg-gray-200 text-gray-700 text-center">
                            <th className="p-3 w-12">#</th>
                            <th className="p-3 w-12"></th>

                            <th className="p-3">Tarefa</th>
                            <th className="p-3 w-32">Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {list.length > 0 ? (
                            list.map((item) => (
                                <tr key={item.id} className="border-b hover:bg-gray-100 text-gray-600 text-center">

                                    <td className="p-3">{item.id}</td>
                                    <td className="p-3">
                                        <div className={"flex items-center me-4"}>
                                            <input
                                                checked={item.toggle ?? false} // Garantindo que o checkbox seja controlado
                                                className={`w-4 h-4 ${item.toggle ? 'text-green-600' : 'text-orange-600'} bg-gray-100 border-gray-300 rounded-sm focus:ring-${item.toggle ? 'green' : 'orange'}-500 dark:focus:ring-${item.toggle ? 'green' : 'orange'}-600`}
                                                onClick={() => dispatch({ action: "toggle", payload: { id: item.id } })}
                                                type={'checkbox'}
                                            />
                                            {item?.toggle &&
                                                <label htmlFor="red-checkbox" className={`ms-2 text-sm font-medium text-green-600`}>
                                                     Feito
                                                </label>
                                            }

                                        </div>
                                    </td>

                                    <td className={`p-3 ${item.toggle ? "line-through text-gray-500" : ""}`}>
                                        {item.value}
                                    </td>
                                    <td className="p-3 flex justify-center gap-2">
                                        <DefaultButton onClick={()=> handleSHowEdit(item)} value={"Editar"} action={"edit"}/>
                                        <DefaultButton onClick={() => dispatch({action: "remove", payload: {id: item.id}})} value={"Remover"} action={"remove"}/>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="text-center p-4 text-gray-500">
                                    Nenhuma tarefa adicionada.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

            {
                isEdit &&
                <div className={"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"}>

                    <div className={"bg-white p-6 rounded-lg shadow-lg w-96"}>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Editar Tarefa</h2>

                        <input
                            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none text-gray-800"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            placeholder="Edite a tarefa..."
                        />

                        <div className="flex justify-end gap-2">
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
                                onClick={() => setIsEdit(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                                onClick={handleEdit}
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>

            }
        </div>
    );
};

interface IDefaultButton{
    onClick: () => void;
    value: string,
    action: "remove"| "edit" | "togge"
}
export const DefaultButton = ({ onClick, value, action}: IDefaultButton) =>{

    let styles = ""
    switch (action){
        case "edit":
            styles = "text-blue-500 bg-blue-50 rounded-md hover:bg-blue-100";
            break;
        case "remove":
            styles = "text-red-500 bg-red-50 rounded-md hover:bg-red-100";
            break;
        case "togge":
            styles = "text-purple-500 bg-purple-50 rounded-md hover:bg-purple-100";
            break;
        default:
            styles = "text-gray-500 bg-gray-50 rounded-md hover:bg-gray-100";
            break;
    }
    return(
        <button
            className={`py-2 px-4 ${styles} w-[100px]`}
            onClick={ onClick }
        >
            { value }
        </button>
    )
}