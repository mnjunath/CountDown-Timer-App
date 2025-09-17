import './CountDown.css'
import { use, useEffect, useRef, useState } from 'react'

function CountDown() {

    const [ target, setTarget ] = useState(null);

    const [ diff, setDiff ] = useState(0);

    const id = useRef(null);

    function handleSubmit() {
        id.current = setInterval(() => {
            setDiff(new Date(target) - new Date());
        }, 1000);
    };

    useEffect(() => {
        if (diff <= 0) {
            clearInterval(id.current);
        }
    }, [diff]);

    const getDays = () => {
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    const getHours = () => {
        return Math.floor((diff / (1000 * 60 * 60)) % 24);
    }

    const getMinutes = () => {
        return Math.floor((diff / (1000 * 60)) % 60);
    }

    const getSeconds = () => {
        return Math.floor((diff / 1000) % 60);
    }

    return (
        <>
            <h1>COUNTDOWN TIMER APP</h1>
            <div id="input">
                <input 
                    type="datetime-local" 
                    id="datetime"
                    onChange={ (e) => { setTarget(e.target.value) } }
                />
                <button id="submit" onClick={handleSubmit}>Start</button>
            </div>
            {diff}
            <div id='display'>
                <ul>
                    <li><span id='days'>{getDays()}</span>days</li>
                    <li><span id='hours'>{getHours()}</span>hours</li>
                    <li><span id='minutes'>{getMinutes()}</span>minutes</li>
                    <li><span id='seconds'>{getSeconds()}</span>seconds</li>
                </ul>
            </div>
        </>
    )
}

export default CountDown;