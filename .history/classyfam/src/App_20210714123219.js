import { Mpesa } from "mpesa-api";
import './App.css';

function App() {
  const mpesa = new Mpesa(credentials, environment);

  const credentials = {
    clientKey: 'Ow8qUxMiSzE24RZyIMGniC167SwTjEfD',
    clientSecret: 'YOUR_CONSUMER_SECRET_HERE',
    initiatorPassword: 'YOUR_INITIATOR_PASSWORD_HERE',
    securityCredential: 'YOUR_SECURITY_CREDENTIAL',
    certificatePath: 'keys/example.cert'
  };
  
  const credentials = {
    ...,
    certificatePath: null
  };
  return (
    <div className="app">
      <h1>Mpesa</h1>
      
    </div>
  );
}

export default App;
