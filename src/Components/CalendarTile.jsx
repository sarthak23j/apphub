import { useState } from "react";
import "../Styles/CalendarTile.css";

export default function CalendarTile(Props) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const today = new Date(); // Store today's date

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getStartDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay(); // Get the day of the week for the 1st of the month
    };

    const renderDays = () => {
        const days = [];
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const startDay = getStartDayOfMonth(year, month); // Get the starting day of the month

        // Add empty spaces for days before the start of the month
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday = day === today.getDate() && 
                            month === today.getMonth() && 
                            year === today.getFullYear();

            days.push(
                <div key={day} className={`calendar-day ${isToday ? 'curr-date' : ''}`}>
                    {day}
                </div>
            );
        }

        return days;
    };

    const renderDayHeaders = () => {
        const dayHeaders = ["S", "M", "T", "W", "T", "F", "S"];
        return dayHeaders.map((day, index) => (
            <div key={index} className="calendar-day-header">
                {day}
            </div>
        ));
    };

    const handleBackgroundClick = (event) => {
        event.stopPropagation(); // Prevent event propagation to the parent
    };

    return (
        <div className="calendar-shadow-bg" onClick={Props.toggleOff}>
            <div className="calendar-bg" onClick={handleBackgroundClick}>
                <div className="calendar-header">
                    <button onClick={handlePrevMonth}>{"<"}</button>
                    <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
                    <button onClick={handleNextMonth}>{">"}</button>
                </div>
                <div className="calendar-day-headers">
                    {renderDayHeaders()}
                </div>
                <div className="calendar-days">
                    {renderDays()}
                </div>
            </div>
        </div>
    );
}