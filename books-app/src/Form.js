function Form(props) {
    return (
        <form
          name={props.name}
          value={props.searchInput}
          onChange={props.onChange}
          onSubmit={props.onSubmit}
        >
          <label>Search books: 
            <input type="text" name={props.name} defaultValue={props.inputValue}></input>
          </label>
          <input type="submit" value="Search"></input>
        </form>
    )
}

export default Form;