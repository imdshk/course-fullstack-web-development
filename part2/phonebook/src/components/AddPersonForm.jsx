const AddPersonForm = ({onSubmit, onReset, name, number, onNameChange, onNumberChange}) => {
    return(
        <form onSubmit={onSubmit} onReset={onReset} >
        <div>
            name: <input value={name} onChange={onNameChange} />
        </div>
        <div>
            number: <input value={number} onChange={onNumberChange} />
        </div>
        <div>
            <button type="submit">
            add
            </button>
            <button type="reset">
            clear
            </button>
        </div>
        </form>
    )
}

  export default AddPersonForm