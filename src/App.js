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
          <Route path='/MoviesAPI/:movieType' component={Movies} exact></Route>
          <Route path='/MoviesAPI/search/movie' component={Search} exact/>
          <Route path='/MoviesAPI/' component={Home} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
      <div className='backgroundApp'></div>
    </div>
  );
}

export default App;
