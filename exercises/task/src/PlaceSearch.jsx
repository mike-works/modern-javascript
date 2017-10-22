import { Component } from 'react';
import { autocomplete } from './autocomplete';

function shortUrl(u = '', l = 50) {
  let chunk_l = l / 2;
  let url = u.replace('http://', '').replace('https://', '');

  if (url.length <= l) {
    return url;
  }

  let start_chunk = shortString(url, chunk_l, false);
  let end_chunk = shortString(url, chunk_l, true);
  return start_chunk + '..' + end_chunk;
}

function shortString(ss, l, rev) {
  let stop_chars = [' ', '/', '&'];
  let acceptable_shortness = l * 0.80; // When to start looking for stop characters
  let reverse = typeof rev !== 'undefined' ? rev : false;
  let s = reverse ? ss.split('').reverse().join('') : ss;
  let short_s = '';

  for (let i = 0; i < l - 1; i++) {
    short_s += s[i];
    if (i >= acceptable_shortness && stop_chars.indexOf(s[i]) >= 0) {
      break;
    }
  }
  if (reverse) {
    return short_s.split('').reverse().join('');
  }
  return short_s;
}

export class PlaceSearch extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      results: [], // List of search results
      _existingSearch: null // Most recent search (a promise that resolves to an array)
    };
    // Event handler for changes to search term
    this.trySearch = this.trySearch.bind(this);
  }
  /**
   * Event handler for changes to the serch term
   *
   * @param {InputEvent} evt from the search field
   *
   * @memberof PlaceSearch
   * @return {undefined}
   */
  trySearch(evt) {
    if (
      this.state._existingSearch && !this.state._existingSearch.finished // If a search is in progress
    ) {
      // ...and it's still underway
      // Cancel the exiting search. We're about to begin a new one
      console.info(
        `🚫 Cancelling search for ${this.state._existingSearch.term}`
      );
      this.state._existingSearch.cancel();
    }
    // Kick off the new search, with the new search term
    let p = autocomplete(evt.target.value);
    // Update the _existingSearch state, so our component re-renders
    //   (probably to update the "Searching for <term>..." message)
    this.setState({ _existingSearch: p });
    // Attach a promise handler to the search.
    //  THIS WILL ONLY BE INVOKED IF THE SEARCH RUNS TO COMPLETION
    p.then(results => {
      // When the search completes, update the "results" state, triggering a re-render
      this.setState({ results });
    });
  }

  /**
   * Render the html for this component
   *
   * @param {JSX.Element} elem element
   * @param {Object} container component state
   * @returns {undefined}
   *
   * @memberof PlaceSearch
   */
  render() {
    let { results, _existingSearch } = this.state;
    /**
     * There are a bunch of different things that we could end up
     * displaying as feedback to the user. Below we handle each of
     * four cases independently, taking care to always have searchResults
     * be an array.
     */
    let searchResults = [];
    if (!_existingSearch) {
      // No search yet
      searchResults = [<li key='goahead'>Type something in above to search</li>];
    } else if (_existingSearch && !_existingSearch.finished) {
      // Search in progress
      searchResults = [
        <li key='inprogress' className="blue">Searching for {_existingSearch.term}...</li>
      ];
    } else if (results.length === 0) {
      // No results found
      searchResults = [
        <li key='noresults' className="red">Sorry! No results for {_existingSearch.term}.</li>
      ];
    } else {
      // Search complete
      searchResults = results.map(r => (
        <li key={r.id} className="search-result">
          <img className="icon" src={r.icon} />
          <h3>{r.name}</h3>
          <p>
            <a href={r.url} target="_blank">{r.vicinity}</a>
            {' '}
            -
            {' '}
            <a href={r.website} target="_blank">{shortUrl(r.website, 20)}</a>
          </p>
        </li>
      ));
    }
    return (
      <div>
        <h2>Search for a place</h2>
        <input type="search" placeholder="Search" onInput={this.trySearch} />
        <ul className="results">
          {searchResults}
        </ul>
      </div>
    );
  }
}
