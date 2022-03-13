import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProcessInstanceDetail from './pages/ProcessInstanceDetail';
import ProcessInstanceList from './pages/ProcessInstanceList';

function App() {
  return (
    <>
      <ReactNotifications />
      <Router>
        <Switch>
          <Route exact path="/" component={ProcessInstanceList} />
          <Route exact path="/:id/:order" component={ProcessInstanceDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
