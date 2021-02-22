import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Kibana from './components/Kibana'
import Login from './components/Login'

function App() {
  return (
    <div className='App'>
      <Router basename='/kibana-iframe'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/kibana' component={Kibana} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
