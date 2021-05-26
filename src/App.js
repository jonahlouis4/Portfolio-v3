import react from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.less'

function App() {
  return (
    <Switch>
      <Route exact pathj="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
