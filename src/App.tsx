import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";

import ApolloClient from "./ApolloClient"

import Organization from "./Organization"

import './App.css';


class App extends Component {
  state = {
    states: ["OPEN", "CLOSED"]
  }

  open = () => {
    this.setState({states: ["OPEN"]})
  }

  close = () => {
    this.setState({states: ["CLOSED"]})
  }

  noFilter = () => {
    this.setState({states: ["OPEN", "CLOSED"]})
  }
  render() {
    return (
      <ApolloProvider client={ApolloClient}>
        <div className="App">
        <button onClick={this.open}>Open</button>
        <button onClick={this.close}>Closed</button>
        <button onClick={this.noFilter}>No filter</button>

          <Organization login="rubysherpas" states={this.state.states}/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
