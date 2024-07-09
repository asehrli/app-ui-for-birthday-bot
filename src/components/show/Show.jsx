import {useEffect, useRef, useState} from "react";
import axios from "axios";

const Show = (props) => {
    const [user, setUser] = useState({})
    const intervalRef = useRef(null);
    const [countDown, setCountDown] = useState('');


    useEffect(() => {
        axios
            .get(`https://7e25-37-110-210-212.ngrok-free.app/api/user/me/${props.chatId}`)
            .then(res => res.data)
            .then(data => {
                console.log(data)
                // setUser(data.data)
                const date = new Date(Date.parse(data.data.birthdate));
                let now = new Date();
                date.setFullYear(now.getFullYear())
                if (now.getMonth() > date.getMonth()) {
                    date.setFullYear(now.getFullYear() + 1)
                } else if (now.getMonth() === date.getMonth() && now.getDate() > date.getDate()) {
                    date.setFullYear(now.getFullYear() + 1)
                }
                intervalRef.current = setInterval(() => {
                    let t = date.getTime() - new Date().getTime();
                    t = Math.floor(t / 1000);
                    const days = Math.floor(t / 86400);
                    t = t % 86400;
                    const hours = Math.floor(t / 3600) + 5;
                    t = t % 3600;
                    const minutes = Math.floor(t / 60);
                    t = t % 60
                    const seconds = t;

                    setCountDown(`${days} day, ${hours} hours ${minutes}:${seconds}`)
                }, 1000)
            })
            .catch(err => alert(err.message))
    }, []);

    return (
        <>
            <div className="container">
                <h1>{user.name}</h1>
                <h3>{user.username}</h3>
                <h3>{countDown}</h3>
            </div>
        </>
    );
};

export default Show;