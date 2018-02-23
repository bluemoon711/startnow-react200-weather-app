import React from 'react';
import SearchEntries from './components/SearchEntries';
import CityEntries from './components/CityEntries';
import HistoryEntries from './components/HistoryEntries';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3 text-left'>Origin Weather Application</h1>
          <p>Always know if you'll need an umbrealla!</p>
        </div>
        <div className='row'>
          <div className='col-12 col-md-12 mb-4'>
            <SearchEntries />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityEntries />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <HistoryEntries />
          </div>
        </div>
      </div>

    );
  }
}
