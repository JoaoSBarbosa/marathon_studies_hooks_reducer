import {use, useContext, useState} from "react";
import {UserContext} from "@/app/components/lessons/context_lesson/context/UserContext";
import {UserGreetingMessage} from "@/app/components/lessons/context_lesson/components/UserGreetingMessage";

export const UserLogged = () => {

    const user = useContext(UserContext);
    const [userName, setUserName] = useState("");

    const handleLoggin = () => {
        if (user && userName) {
            user.setUserLogged(userName)

            setUserName("");
        } else {
            return
        }

    }
    const handleLoggof = () => {
        if (user) {
            user.setUserLogged("");
        }
    }
    return (
        <section className={"bg-gray-900"}>

            <div className={"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-96 lg:py-0"}>

                <div
                    className={"w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 bg-gray-800 border-gray-700"}>

                    {user && user?.userLogged ?

                        (
                            <div className={"flex flex-col p-4 gap-4 w-full"}>


                                <div className={"flex items-center justify-between"}>
                                    <img
                                        className="w-10 h-10 rounded-full"
                                        src="/user.jpg"
                                        alt=""
                                    />
                                    <button
                                        onClick={handleLoggof}
                                        type="button"
                                        className={`
                                            text-red-800 bg-red-100 hover:bg-red-200 focus:ring-0 
                                            focus:outline-none focus:ring-primary-300 font-medium rounded-lg 
                                            text-sm px-5 py-2.5 text-center`}>
                                        Sair
                                    </button>
                                </div>
                                <UserGreetingMessage userName={user?.userLogged}/>

                            </div>
                        )
                        :
                        (
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Entre na sua conta
                                </h1>
                                <form className="space-y-4 md:space-y-6">
                                    <div>
                                        <label
                                            htmlFor="nome"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Seu nome
                                        </label>
                                        <input
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            type="text"
                                            name="nome"
                                            id="nome"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Lucas de Souza" required={true}/>
                                    </div>


                                    <button
                                        onClick={handleLoggin}
                                        type="button"
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5
                                text-center">
                                        Entrar
                                    </button>
                                </form>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    )
}