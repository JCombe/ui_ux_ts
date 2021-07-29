import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/News/Dashboard';
import Home from './Pages/Home/Home';
import VerticalNavBar from './VerticalNavBar/VerticalNavBar';
import HorizNavBar from './HorizNavBar/HorizNavBar';
import Support from './Pages/Support/Support';
import People from './Pages/People/People';

function App() {
  return (
    <Router>
      <div className='flex min-h-screen'>
        <VerticalNavBar />

        <div className='flex-col w-full'>
          <HorizNavBar />
          <Switch>
            <Route path='/support'>
              <Support />
            </Route>
            <Route path='/people'>
              <People />
            </Route>
            <Route path='/news'>
              <Dashboard />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
