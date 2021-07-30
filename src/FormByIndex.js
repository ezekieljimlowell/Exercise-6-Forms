
const FormByIndex = ({idOfElement}) => {
    
    const submitHandler = (e) => {
        e.preventDefault();
        idOfElement(e.target.elements[0].value);
        console.log(e.target.elements[0].value);
    }

    return (
        <form onSubmit={submitHandler}>
            <label for="index">Set value from element index: </label>
            <input id="index" type="text"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormByIndex;