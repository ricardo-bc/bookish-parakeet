import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import User from './components/users/User'

import FinderState from './context/finder/FinderState'
import AlertState from './context/alert/AlertState'

const App = () => {
  
  return (
    <FinderState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar icon ="fab fa-affiliatetheme" title= " Finder"/>
              <div className = "conatiner"> 
                <Alert alert={alert}></Alert>
                <Switch>
                  <Route exact path ='/' component={Home} />
                  <Route excat path ='/about' component ={About}/>
                  <Route exact path ='/user/:login' component ={User}/>
                  <Route component={NotFound}/>
                </Switch>
              </div>
          </div>
        </Router>
      </AlertState>
    </FinderState>
    
  )
}

export default App;
