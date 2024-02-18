const AddPersonForm = ({onSubmit, onReset, name, number, onNameChange, onNumberChange}) => {
    return(
        <form onSubmit={onSubmit} onReset={onReset} >
        <div>
            name: <input value={name} onChange={onNameChange} placeholder="First Last"/>
        </div>
        <div>
            number: <input value={number} onChange={onNumberChange} placeholder="041-123456" />
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