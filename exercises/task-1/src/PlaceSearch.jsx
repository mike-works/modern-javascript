// @ts-check
import { Component } from 'react';
import { autocomplete } from './autocomplete';
import { shortUrl } from './utils/string';

/**
 * @typedef InputEvent
 * @extends React.FormEvent<HTMLInputElement>
 * @prop {HTMLInputElement} target
 */

const SearchResultItem = ({result}) => (
  <li key={result.id} className="search-result">
    <img className="icon" src={result.icon} />
    <h3>{result.name}</h3>
    <p>
      <a href={result.url} target="_blank">{result.vicinity}</a> -
      <a href={result.website} target="_blank">{shortUrl(result.website, 20)}</a>
    </p>
  </li>
);

const SearchResultItemList = ({trySearch, results}) => (
  <div>
    <h2>Search for a place</h2>
    <input type="search" placeholder="Search" onInput={trySearch} />
    <ul className="results">
      {results}
    </ul>
  </div>
);

const SearchResults = ({search, results, trySearch}) => {
  /**
   * There are a bunch of different things that we could end up
   * displaying as feedback to the user. Below we handle each of
   * four cases independently, taking care to always have searchResults
   * be an array.
   */
  let searchResults = [];
  if (!search) {
    // No search yet
    searchResults = [<li key='goahead'>Type something in above to search</li>];
  } else if (search && results.length === 0) {
    // Search in progress
    searchResults = [
      <li key='inprogress' className="blue">Searching for {search.term}...</li>
    ];
  } else if (results.length === 0) {
    // No results found
    searchResults = [
      <li key='noresults' className="red">Sorry! No results for {search.term}.</li>
    ];
  } else {
    // Search complete
    searchResults = results.map(r => <SearchResultItem key={r.id} result={r} />);
  }
  return <SearchResultItemList results={searchResults} trySearch={trySearch} />;
};

export class PlaceSearch extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      results: [], // List of search results
      search: null // Most recent search (a promise that resolves to an array)
    };
    // Event handler for changes to search term
    this.trySearch = this.trySearch.bind(this);
  }
  /**
   * Event handler for changes to the serch term
   * 
   * @param {InputEvent} evt from the search field
   * @return {void}
   */
  trySearch(evt) {
    // Kick off a search
    let p = autocomplete(evt.target.value).then(results => {
      let filtered = results.filter(x => x);
      // When the search completes, update the "results" state, triggering a re-render
      if (this.state.search === p) this.setState({ results: filtered });
    });
    // Update the search state, so our component re-renders
    //   (probably to update the "Searching for <term>..." message)
    this.setState({ search: p, results: [] });
  }
  render() {
    let { results, search } = this.state;
    return <SearchResults {...{
      results,
      search,
      trySearch: this.trySearch
    }} />;
  }
}