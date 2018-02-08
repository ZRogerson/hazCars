import React, { Component } from 'react';
import Listings from './components/listings/listings.jsx';
import Filters from './components/filters/filters.jsx';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      listings: [],
      filters: {
        matchAll: false,
        colors: [],
        options: {}
      }
    }

    this.applyFilters = this.applyFilters.bind(this);
  }

  componentWillMount() {
    fetch('/inventory.json')
      .then(res => res.text())
      .then(data => JSON.parse(data))
      .then((json) => {
        this.setState({ listings: json })
      })
  }

  applyFilters(filters) {
    const { matchAll, options, colors } = filters;
    let curOptions = Object.assign(this.state.filters.options, options, {});

    this.setState({
      filters: {
        matchAll: matchAll || this.state.filters.matchAll,
        colors: colors,
        options: curOptions
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/hero.jpg" alt="" />
          <h1>You Can Haz Car!</h1>
        </header>
        <main>
          {this.state.listings.length > 0 && <Filters listings={this.state.listings} setFilters={this.applyFilters} />}
          {this.state.listings.length > 0 && <Listings listings={this.state.listings} filters={this.state.filters} />}
        </main>
      </div>
    );
  }
}

export default App;
