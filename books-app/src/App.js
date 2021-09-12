import { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: 'harry potter',
      bookResults: [],
      hasError: false
    }
  }

  componentDidMount() {
    this.fetchData(this.state.searchInput)

  }

  fetchData = (inputData) => {
    this.setState({ isLoading: true });

    let string = inputData.replace(/\s+/g,'').trim()

    const promise = axios.get("https://www.googleapis.com/books/v1/volumes?q="+string+'"');

    promise
      .then((res) => {
        this.setState({
          bookResults: res.data.items,
          isLoading: false
        })
      })
      .catch((error) => {
        this.setState({
          hasError: true,
          isLoading: false
        })
      })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    
    this.setState({
      searchInput: this.state.searchInput,
      bookResults: []
    })

    this.fetchData(this.state.searchInput);
  
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  
  }

  render() {
    return (
      <div className="App">
        <h1>Book search App!</h1>
        <Form 
          name="searchInput"
          value={this.state.searchInput}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          inputValue={this.state.searchInput}
        />
        {this.state.hasError && (
          <p>Something went wrong. Please try again.</p>
        )}
        {this.state.isLoading && (
          <p>Loading Content please wait...</p>     
        )}
        {this.state.bookResults ? (
            <List bookResults={this.state.bookResults} />
          ) : (
            <p style={{ color: 'red' }}>Sorry no search results for {this.state.searchInput}</p>
          )
        }
      </div>
    );
  }
}

export default App;
