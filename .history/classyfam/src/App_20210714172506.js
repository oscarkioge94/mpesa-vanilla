import { Mpesa } from "mpesa-api";
import './App.css';

function App() {

  const Mpesa = require("mpesa-api").Mpesa;
//import { Mpesa } from "mpesa-api";

const mpesa = new Mpesa(
  {
    client_key: process.env.mpesaClientKey,
    client_secret: process.env.mpesaClientSecret,
    initiator_password: process.env.mpesaInitiatorPassword,
    certificatepath: null,
  },
  "sandbox"
);

mpesa
  .lipaNaMpesaOnline({
    BusinessShortCode: 174379, // Lipa Na Mpesa Online Shortcode on test credentials page
    Amount: 1 /* 1000 is an example amount */,
    PartyA: "254710830759", 




  // const mpesa = new Mpesa(credentials, environment);
 

  // const credentials = {
  //   clientKey: 'Ow8qUxMiSzE24RZyIMGniC167SwTjEfD',
  //   clientSecret: 'cf6kr9EFqDHz0Zm9',
  //   initiatorPassword: 'YOUR_INITIATOR_PASSWORD_HERE',
  //   securityCredential: 'YOUR_SECURITY_CREDENTIAL',
  //   certificatePath: 'keys/example.cert',
  //   certificatePath: null

  // };
  // const environment = 'sandbox';
  

  // mpesa.c2bsimulate({
  //   ShortCode:123456,
  //   Amount:100,
  //   Msisdn:254710830759,
  //   CommandID:'fees',
  //   BillRefNumber:'',

  // })
  // .then((response) => {
  //   console.log(response);
  // })
  // .catch((error) => {
  //   console.error(error);
  // })
  return (
    <div className="app">
      <h1>Mpesa</h1>
      
    </div>
  );
}

export default App;
