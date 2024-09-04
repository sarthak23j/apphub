import { useEffect, useState } from "react"
import "../Styles/DateTimeDisplay.css"

export default function DateTimeDisplay(){
    const [date, setDate ] = useState(new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short' }));
    const [time, setTime ] = useState(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }))

    useEffect(() => {
        setInterval(() => {
            setDate(new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short' }))
            setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }))
        },250)
    })

    return(
        <div className="clock">
            <div className="clock-date">{date}</div>
            <div className="clock-time">{time}</div>
        </div>
    )
}