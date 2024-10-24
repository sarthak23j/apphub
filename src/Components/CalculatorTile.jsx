import { useState } from "react";
import "../Styles/CalculatorTile.css";

export default function CalculatorTile(Props) {
    const [screenOp, setScreenOp] = useState("");

    function handleClick(input) {
        if (input === "=") {
            try {
                setScreenOp(eval(screenOp).toString());
            } catch (error) {
                setScreenOp("Error");
            }
        } else if (input === "C") {
            setScreenOp("");
        } else {
            setScreenOp(prev => prev + input);
        }
    }

    const handleBackgroundClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className="calc-shadow-bg" onClick={Props.toggleOff}>
            <div className="calc-bg" onClick={handleBackgroundClick}>
                <div className="calc-screen">{screenOp}</div>

                <div className="calc-leftButtons">
                    {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "+", "C", "0", "=", "-"].map((button) => (
                        <div 
                            key={button} 
                            className="calc-button" 
                            onClick={(e) => {
                                handleClick(button);
                                e.stopPropagation();
                            }}
                        >
                            {button}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}