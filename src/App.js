import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route} from "react-router-dom"; 
import HatsPage from './pages/HatsPage/HatsPage';
import Jackets from './pages/JacketsPage/Jackets';
import Sneakers from './pages/SneakersPage/Sneakers';
import MensPage from './pages/MensPage/MensPage';
import WomensPage from './pages/WomensPage/WomensPage';
import Shop from './pages/Shop/Shop'; 

function App() {
  return (
    <div className="App">
      <Switch>
           <Route path='/' exact > 
              <HomePage />
           </Route>
           <Route path='/shop'  > 
              <Shop />
           </Route>
      </Switch>
    </div>
  );
}

export default App;
