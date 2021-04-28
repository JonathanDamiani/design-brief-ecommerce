// Copyright © 2021 Jonathan Dean Damiani
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Main, Products } from './pages';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
