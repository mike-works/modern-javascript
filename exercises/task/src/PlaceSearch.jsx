import { Component } from 'react';
import { autocomplete } from './autocomplete';

export class PlaceSearch extends Component {
  constructor() {
    super(...arguments);
    this.state = {results: [], _existingSearch: null};
    this.trySearch = this.trySearch.bind(this);
  }
  trySearch(evt) {
    if (this.state._existingSearch && !this.state._existingSearch.resolved) {
      console.info(`🚫 Cancelling search for ${this.state._existingSearch.term}`);
      this.state._existingSearch.cancel();
    }
    let p = autocomplete(evt.target.value);
    this.setState({_existingSearch: p});
    this.state._existingSearch.then((results) => {
      this.setState({ results });
    });
  }
  render({}, { results, _existingSearch }) {
    let searchResults;
    if (!_existingSearch) {
      searchResults = 'Type something in above to search';
    } else if (_existingSearch && !_existingSearch.resolved) {
      searchResults = `Searching for ${_existingSearch.term}...`;
    } else {
      searchResults = results.map(r => <li>{r}</li> );
    }
    return (
      <div>
        <h2>Search for a place</h2>
        <input type="search" placeholder="Search" onInput={this.trySearch}/>
        <ul className="results">
          {searchResults}
        </ul>
      </div>
    );
  }
}
