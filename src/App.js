import './App.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import CheckList from './components/CheckList'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/check-list" component={CheckList} />
    </Switch>
  </BrowserRouter>
)

export default App
