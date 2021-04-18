import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Movies from './container/Movies/Movies';
import Search from './container/Movies/Search';
import Home from './container/Movies/Home';
import './App.css';


function App() {
  return (
    <div className='App' >
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/:movieType' component={Movies} exact></Route>
          <Route path='/search/movie' component={Search} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
      <div className='backgroundApp'></div>
    </div>
  );
}

export default App;
