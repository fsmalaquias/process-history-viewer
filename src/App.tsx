import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProcessInstanceList from './pages/ProcessInstanceList';
import ProcessInstanceDetail from './pages/ProcessInstanceDetail';

function App() {
  return (
    <Router>
       <Switch>
		      <Route exact path="/" component={ProcessInstanceList}/>
				  <Route exact path="/:id/:order" component={ProcessInstanceDetail}/>
	    </Switch>
    </Router>
  );
}

export default App;
