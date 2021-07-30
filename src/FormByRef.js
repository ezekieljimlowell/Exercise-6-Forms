import { useRef } from "react";

const FormByRef = ({idOfElement}) => {
    const inputRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        idOfElement(inputRef.current.value);
    }

    return (
        <form onSubmit={submit}>
            <label for="reference">Get value from input reference: </label>
            <input id="reference" ref={inputRef} type="text"></input>
            <button type="submit">submit</button>
        </form>
    )
}

export default FormByRef;