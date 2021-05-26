import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import './App.less'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
