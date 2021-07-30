import { useState } from "react";

const ControlledInput = () => {
    const [textInput, setTextInput] = useState("");
    
    let changeHandler = (e) => {
        e.preventDefault();
        let value = e.target.value;
        setTextInput(value);
    }

    let submitHandler = (e) => {
        e.preventDefault();
        alert(textInput);
    }

    return (
        <form onSubmit={submitHandler}>
            <label for="input"> normal form: </label>
            <input type="text" name="input" id="input" value={textInput} onChange={changeHandler}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ControlledInput;