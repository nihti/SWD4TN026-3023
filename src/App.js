import './App.css';
import Countries from './components/Countries';

/**
 * Instructions: 
 * https://www.apollographql.com/docs/react/get-started/
 * Data:
 * https://countries.trevorblades.com/
 * Test queries:
 * https://countries.trevorblades.com/
 */

function App() {

  return (
    <div>
      <header className="App-header">
        <Countries />
      </header>
    </div>
  );
}

export default App;
