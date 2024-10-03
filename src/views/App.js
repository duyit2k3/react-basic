import logo from './logo.svg';
import './App.scss';
import './Example/MyComponent.js'
import MyComponent from './Example/MyComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <MyComponent></MyComponent>
        
      </header>
    </div>
  );
}

export default App;
