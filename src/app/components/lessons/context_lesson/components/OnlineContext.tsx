import {useContext} from "react";
import {CountContext2} from "@/app/components/lessons/context_lesson/context/CountContext2";

export const OnlineContext = () => {
    const online = useContext(CountContext2);
    const defaultButtonStyles = "py-2 px-4 rounded-md transition-all duration-200";

    const handleBanAll = () => {
        if (online) {
            online.setOnlineCount(0);
        }
    };

    const handlePermitAll10 = () => {
        if (online) {
            if (online.onlineCount !== null) {
                online.setOnlineCount(online.onlineCount + 10);
            } else {
                online.setOnlineCount(10);
            }
        }
    };

    // Garantir que online não seja null antes de renderizar os botões
    if (!online) return <div>Loading...</div>; // Caso o contexto não tenha sido carregado

    return (
        <div className="flex gap-4 items-center">
            <span
                className={`bg-green-100 text-green-800 border border-green-900 ${defaultButtonStyles}`}
            >
        Usuários online: {online.onlineCount ?? 0}
      </span>

            {/* Botão de banir todos */}
            {online.onlineCount !== null && online.onlineCount > 0 && (
                <button
                    onClick={handleBanAll}
                    className={`bg-red-200 hover:bg-red-300 text-red-800 p-2 rounded-md ${defaultButtonStyles}`}
                >
                    Banir todos
                </button>
            )}

            <button
                onClick={handlePermitAll10}
                className={`bg-purple-200 hover:bg-purple-300 text-purple-800 p-2 rounded-md ${defaultButtonStyles}`}
            >
                Liberar +10
            </button>

        </div>
    );
};
