import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails';
import Notfound from './components/Notfound/Notfound';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/restaurant'>
          <Restaurant></Restaurant>
        </Route>
        <Route path='/itemDetails/:mealId'>
          <MealDetails />
        </Route>
        <Route path='*'>
          <Notfound></Notfound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
