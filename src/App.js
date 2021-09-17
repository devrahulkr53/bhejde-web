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

function App() {
  const app = initializeApp(firebaseConfig)
   
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <div> 
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/driver">
              <Driver />
            </Route> 
            <Route path="/">
              <Driver {...app} />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>  
  );
}

export default App;
