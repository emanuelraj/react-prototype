import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Users from './_components/user-profile/users';
import UserProfile from './_components/user-profile/user-profile';
import Charts from './_components/charts/charts';
import PlatformIntegration from './_components/platform-integration/platform-integration';


class App extends Component {
  render() {
    return (
      <Router>
         <div>            
            <Switch>
               <Route exact path='/' component={PlatformIntegration} />
               <Route exact path='/users' component={Users} />
               <Route exact path='/users/:id' component={UserProfile} />
               <Route exact path='/charts' component={Charts} />
            </Switch>
         </div>
      </Router>
   );
  }
}

export default App;

