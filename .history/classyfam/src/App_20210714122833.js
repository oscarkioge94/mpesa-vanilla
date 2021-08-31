import { Mpesa } from "mpesa-api";
import './App.css';

function App() {
  const mpesa = new Mpesa(credentials, environment);
  return (
    <div className="app">
      <h1>Mpesa</h1>
      
    </div>
  );
}

export default App;
