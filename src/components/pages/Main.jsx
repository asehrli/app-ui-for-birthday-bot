import Show from "../show/Show.jsx";
import Set from "../set/Set.jsx";
import {useState} from "react";

const Main = () => {
    const [show, setShow] = useState(false)
    const chatId = +location.pathname.substring(location.pathname.lastIndexOf('/') + 1)

    return (
        <>
            <div className="App">
                <div className="container d-flex align-items-center justify-content-center h-100 text-center">
                    <button className={'change-page mb-5 btn ' + (show ? 'btn-success' : 'btn-primary')} style={{width: '100px'}}
                            onClick={() => setShow(prevState => !prevState)}>{show ? 'Set' : 'Show'}</button>
                    <div style={{paddingTop: '5rem'}}>
                        {show ? <Show chatId={chatId}/> : <Set chatId={chatId}/>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;