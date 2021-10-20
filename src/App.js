import './components/Todolist';
import './App.css';
import TodoList from './components/Todolist';
import Home from './components/Home';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

/**
 * Create three components Home, About and Contact and create menu for these using the React Router. 
 * The Home page is default page that is shown initially.
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/links">Links</Link>
          <Link to="/todolist">Todo-list</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/links" render={() => <h1>Links</h1>} />
            <Route path="/todolist" render={() => <TodoList />} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
