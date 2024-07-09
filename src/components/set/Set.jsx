import {useState} from "react";
import axios from "axios";

const Set = (props) => {

    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);
    const [text, setText] = useState('');

    const onChangeYear = (e) => {
        let v = e.target.value

        if (v.length > 4)
            v = v.substring(0, 4);

        e.target.value = v
        setYear(+v)
    }

    const onChangeMonth = (e) => {
        let v = e.target.value

        if (v.length > 2)
            v = v.substring(0, 2);

        e.target.value = v
        setMonth(+v)
    }

    const onChangeDay = (e) => {
        let v = e.target.value

        if (v.length > 2)
            v = v.substring(0, 2);

        e.target.value = v
        setDay(+v)
    }

    const onClickSetBtn = e => {
        e.preventDefault()
        axios
            .patch(`https://7e25-37-110-210-212.ngrok-free.app/api/user/${props.chatId}`, {year, month, day})
            .then(res => res.data)
            .then(data => {
                if (data.success)
                    alert('Your birthdate updated successfully.')
                else
                    data.errors.forEach(err => alert(err.message));
            })
            .catch(err => alert(err.message))
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="wrapper">
                    <h2>Set you birthdate</h2>
                    <br/>
                    <form style={{display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem'}}>
                        <input className={'form-control'} type="number" onChange={onChangeYear} placeholder={'year'}/>
                        <input className={'form-control'} type="number" onChange={onChangeMonth} placeholder={'month'}/>
                        <input className={'form-control'} type="number" onChange={onChangeDay} placeholder={'day'}/>
                        <button onClick={onClickSetBtn} className={'btn btn-outline-secondary'}>Set</button>
                    </form>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Set;