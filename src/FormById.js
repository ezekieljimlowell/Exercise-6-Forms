
const FormById = ({idOfElement}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        idOfElement(e.target.elements.username.value)
        console.log(e.target.elements[0].value);
        console.log(e.target.elements);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="username"> changeHandler by ID: </label>
            <input id="username" type="text"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormById;