import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import Layout from './containers/Layout/Layout'
import Main from './containers/Main/Main'
import Uploader from './containers/Uploader/Uploader'
import Person from './containers/Person/Person'


// TODO: Container will be used for layout and routing

class App extends Component {
  render() {

    // Unauthenticated Routes
    let routes = (
      <>
        <Route path="/" exact component={Main} />
        <Route path="/upload" component={Uploader} />
        <Route path="/person" component={Person} />
      </>
    )

    // TODO: Authenticated Routes
    // if (this.props.isAuthenticated) {
    //   routes = (
    //     <Route path="/" exact component={Main} />
    //   )
    // }

    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

// TODO: Auth with redux

export default App;
