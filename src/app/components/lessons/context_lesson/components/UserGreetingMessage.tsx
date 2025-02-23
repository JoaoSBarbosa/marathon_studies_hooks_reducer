import { useState, useEffect } from "react";

interface IUserGreetingMessage {
    userName: string;
}

export const UserGreetingMessage = ({ userName }: IUserGreetingMessage) => {
    const [greeting, setGreeting] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const hours = new Date().getHours();
        let greetingMessage = "";
        let periodMessages: string[] = [];
        let selectedMessage = "";

        if (hours >= 6 && hours < 12) {
            greetingMessage = `Bom dia, ${userName}!`;
            periodMessages = [
                `Acordou para conquistar o mundo hoje?`,
                `Café na mão, determinação no coração. Vamos lá, ${userName.split(" ").slice(0,1)}!`,
                `Hora de brilhar, ${userName.split(" ").slice(0,1)}! O dia está começando e a sua jornada também.`,
            ];
        } else if (hours >= 12 && hours < 18) {
            greetingMessage = `Boa tarde, ${userName}!`;
            periodMessages = [
                `A tarde está aí e o seu poder está em alta!`,
                `Já quase no fim do dia... Mas você ainda tem muita energia, ${userName.split(" ").slice(0,1)}!`,
                `Que a tarde seja produtiva, ${userName.split(" ").slice(0,1)}. Vamos deixar esse dia incrível!`,
            ];
        } else {
            greetingMessage = `Boa noite, ${userName}!`;
            periodMessages = [
                `O dia foi longo, agora é hora de relaxar e recarregar.`,
                `Você conquistou tanto hoje, ${userName.split(" ").slice(0,1)}! Agora é hora de descansar para mais uma jornada amanhã.`,
                `Depois de tanto brilhar hoje, ${userName.split(" ").slice(0,1)}, é hora de curtir uma noite tranquila!`,
            ];
        }

        selectedMessage = periodMessages[Math.floor(Math.random() * periodMessages.length)];

        setGreeting(greetingMessage);
        setMessage(selectedMessage);
    }, [userName]);

    return (
        <div className="font-medium dark:text-white">
            <div>{greeting}</div>
            <div>{message}</div>
        </div>
    );
};
