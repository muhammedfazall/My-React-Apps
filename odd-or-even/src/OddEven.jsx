import { useState, useRef } from 'react'

function OddEven() {

    const [oddOrEven, setOddOrEven] = useState("Check if Odd or Even!");
    const inputRef = useRef(null)

    function handleNumber() {
        const num = inputRef.current.value;

        if (num === "") {
            return setOddOrEven("Please enter a number!");
        }
        setOddOrEven(num % 2 === 0 ? "Even" : "Odd");
    }

    function handleChange() {
        setOddOrEven("Check if Odd or Even")
    }
    return (
        <>
            <p>{oddOrEven}</p>
            <input type="number" placeholder="Enter the number" id="num" ref={inputRef} onChange={handleChange}></input>
            <button onClick={handleNumber}>Check</button>
        </>
    );
}

export default OddEven