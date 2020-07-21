import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      hasRepos: false
    }
    this.search = this.search.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    let server = 'http://localhost:1128';
    $.ajax({
      url: server + '/repos',
      method: 'GET',
      success: (response) => {
        this.setState({
          repos: response
        });
        console.log('Successfully able to get the data: ', this.state.repos);
      },
      error: (error) => {
        console.log('Error in retrieving the data: ', error);
      }
    });
  }

  search (term) {
    console.log('calling search : ', term );
    let server = 'http://localhost:1128';
    $.ajax({
      url: server + '/repos',
      method: 'POST',
      data: {
        username: term
      },
      success: (response) => {
        console.log('Successfully posted the data: ', response);
        setTimeout(() => {
          this.getRepos();
        }, 800)
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
      <Search onSearch={this.search}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));