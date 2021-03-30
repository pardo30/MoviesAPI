import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Movies from './container/Movies/Movies';
import './App.css';
import Title from './components/Title';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Title/>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/:movieType' component={Movies} exact></Route>
          <Route path='/search/movie' component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
