import './App.css';
import Home from './Components/HomeItem/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from './Components/HomeItem/Projects/Projects';
import RAMoto from './Components/Project/RAMoto';
import FoodMood from './Components/Project/FoodMood';
import Healthfirst from './Components/Project/Healthfirst';
import Blog from './Components/Blog/Blog';
import NavMenu from './Components/HomeItem/NavMenu/NavMenu';
import Footer from './Components/HomeItem/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu></NavMenu>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/RAmoto">
            <RAMoto></RAMoto>
          </Route>
          <Route path="/FoodMood">
            <FoodMood></FoodMood>
          </Route>
          <Route path="/Health">
            <Healthfirst></Healthfirst>
          </Route>
          <Route path="/Blog">
            <Blog></Blog>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
