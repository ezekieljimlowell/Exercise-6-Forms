import { useState } from "react";

const PreventUpperCase = () => {
    
    let [inputLower, setInputLower] = useState("");
    let [error, setError] = useState("");

    const changeHandler = (e) => {
        e.preventDefault();
        let value = e.target.value;
        if(value === value.toLowerCase()) {
            setInputLower(value)
        }
        else {
            setError("Should be small case");
        }
    }

    const submit = (e) => {
        e.preventDefault();
        alert(inputLower);
    }

    return (
        <form onSubmit={submit}>
            <label for="lower">Prevent upper case:</label>
            <input id="lower" onChange={changeHandler} value={inputLower} type="text"></input>
            <button type="submit" disabled={error}>Submit</button>
            <div>{error}</div>
        </form>
    )
}

export default PreventUpperCase;
