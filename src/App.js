import './App.css';
import Companies from './components/Companies';
import Places from './components/Places';

/**
 * Instructions: 
 * https://www.apollographql.com/docs/react/get-started/
 * Data:
 * https://graphql.jobs
 * Test queries:
 * https://api.graphql.jobs/
 */

function App() {

  return (
    <div>
      <header className="App-header">
        <Companies />
        <Places />
      </header>
    </div>
  );
}

export default App;
