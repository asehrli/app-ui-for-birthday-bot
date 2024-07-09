import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main.jsx";
import Test from "./pages/Test.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/:chatId" element={<Main/>} />
                    <Route path={'/'} element={<Test/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
