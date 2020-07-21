import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    let server = 'http://localhost:1128';
    $.ajax({
      url: server + '/repos',
      method: 'POST',
      data: {
        username: term
      },
      contentType: 'application/json',
      success: (response) => {
        console.log('Successfully posted the data: ', response);
      },
      error: (error) => {
        console.log('Error posting the data: ', error);
      }
    });
  }

  render () {
    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));