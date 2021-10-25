import logo from './logo.svg';
import './App.css';
import Account from './Pages/Registration/Account';
import Signup from './Pages/Signup/signup';
import Forgotemail from './Pages/forgot email/forgotemail';
import Forgotpassword from './Pages/forgotpassword/forgotpassword';

import Dashboard from './Pages/Dashboard/Dashboard';

import Archive from './Pages/Archive/Archive';
import Trash from './Pages/Trash/Trash';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
         <Switch>
          <Route path="/account" component ={Account}>
           
          </Route>
          <Route exact path="/" component = {Signup}>
            
          </Route>
          <Route  path="/forgotemail" component = {Forgotemail}>
           
          </Route>
          <Route  path="/forgotpassword" component = {Forgotpassword}>
           
           </Route>
        
           <Route  path="/Dashboard" component = {Dashboard}>
           
           </Route>
           
           
        </Switch>
        </Router>
      
     

    </div>
  );
}

export default App;
