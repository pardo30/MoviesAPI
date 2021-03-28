import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Movies from './container/Movies/Movies';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/:movieType' component={Movies} exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
