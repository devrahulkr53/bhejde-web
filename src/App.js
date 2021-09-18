import './App.css';
import { useEffect } from 'react';
import Driver from './pages/Driver'; 
import firebaseConfig from './lib/firebase';
import { initializeApp } from 'firebase/app';
import { Provider } from 'react-redux'
import store from './redux/store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
import Alert from './components/common/alert';
import Home from './pages/Home';
import Navbar from './components/common/navbar';
import About from './pages/About';

function App() {
  const app = initializeApp(firebaseConfig)
   
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        
        <Navbar></Navbar>
        <div> 
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/driver">
              <Driver {...app} />
            </Route> 
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>  
  );
}

export default App;
