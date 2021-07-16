import logo from './logo.svg';
import './App.css';
import {calculate} from '@ali/lib1';

function App() {
  const a = 10;
  const b = 15;
  const operator = '+';


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2>{`${a}  ${operator} ${b} = ${calculate(a,b,operator)}`}</h2>
      </header>
    </div>
  );
}

export default App;
