import './App.css';
import { Control } from './components/Control/Control';

const text = 'Im prop'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Control messeg={text} />
      </header>
    </div>
  );
}

export default App;
