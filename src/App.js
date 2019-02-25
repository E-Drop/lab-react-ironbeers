import React, { Component } from 'react';
import Home from './components/Home'
import './App.css';
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'
import DetailBeer from './components/DetailBeer'
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
          <Switch>
            <Route exact path="/" render={() => {
              return (
                  <div className="home">
                    <Home />
                  </div>
                )
            }}/>
            
            <Route exact path="/beers" render={() => {
              return (
                  <div className="all">
                    <Header/>
                    <AllBeers />
                  </div>
                )
            }}/>
            <Route exact path="/random-beer" render={() => {
              return (
                  <div className="random">
                    <Header/>
                    <RandomBeer/>
                  </div>
                )
            }}/>
            <Route exact path="/single/:id" render={(props) => {
              return (
                  <div className="new">
                    <Header/>
                    <DetailBeer {...props}/>
                  </div>
                )
            }}/>
          </Switch>
    );
  }
}

export default App;
