import React, { Component } from 'react';
import Table from './components/Table';
import Navbar from './components/Navbar';
import Search from './components/Search';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

console.log(url);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: null,
            search_term: DEFAULT_QUERY,
        };

        this.setSearchTopStories = this.setSearchTopStories.bind(this);
        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    fetchSearchTopStories(search_term) {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${search_term}`)
        .then(response => response.json())
        .then(result => this.setSearchTopStories(result, search_term))
        .catch(error => error);
    }

    setSearchTopStories(result, search_term) {
        this.setState({ result, search_term });
    }

    componentDidMount() {
        const { search_term } = this.state;
        this.fetchSearchTopStories(search_term);

        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${search_term}`)
        .then(response => response.json())
        .then(result =>  this.setSearchTopStories(result))
        .catch(error => error);
    }

    onDismiss(id) {
        const updated_list = this.state.result.filter( (item) => item.objectID !== id);
        this.setState({ result: updated_list });
    }

    handleChange(event) {
        this.setState({submitted_value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted! Name: ' + this.state.submitted_value );
        event.preventDefault();
    }

    onSearchChange(event) {
        this.setState({ search_term: event.target.value });
    }

    onSearchSubmit(event) {
        const { search_term } = this.state;
        this.fetchSearchTopStories(search_term);
        event.preventDefault();
    }

    render() {

        const { search_term, result } = this.state;

        if (!result) { return null; }


        return (
            <div className='container'>
                <Navbar />
                <Search 
                    value={search_term}
                    onChange={this.onSearchChange}
                    onSubmit={this.onSearchSubmit}
                >
                    Search
                </Search>
                { result &&                
                <Table 
                    result={result.hits}
                    onDismiss={this.onDismiss}
                    pattern={this.state.search_term}
                />
                }            
            </div>
        );
    }
}


export default App;

