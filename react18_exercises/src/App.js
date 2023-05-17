import logo from './logo.svg';
import './App.css';

function App() {

  const onButtonClick = () => {
    alert('Hi')
  };
  return (
    <div className="App">
    <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}

export default App;
