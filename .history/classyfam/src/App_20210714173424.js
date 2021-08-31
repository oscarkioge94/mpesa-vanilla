
import './App.css';
import { Mpesa } from "mpesa-api";

function App() {

  const Mpesa = require("mpesa-api").Mpesa;
  

const mpesa = new Mpesa(
  {
    client_key: 'Ow8qUxMiSzE24RZyIMGniC167SwTjEfD',
    client_secret: 'cf6kr9EFqDHz0Zm9',
    // initiator_password: 'cf6kr9EFqDHz0Zm9',
    certificatepath: null,
  },
  "sandbox"
);

mpesa
  .lipaNaMpesaOnline({
    BusinessShortCode: 174379, // Lipa Na Mpesa Online Shortcode on test credentials page
    Amount: 1 /* 1000 is an example amount */,
    PartyA: "254710830759", // use your real phone number
    PartyB: 174379, // LiAccount Referencepa Na Mpesa Online Shortcode on test credentials page
    PhoneNumber: "254710830759", // use your real phone number
    CallBackURL:
      "Enter a callback url", // this is where the api sends a callback. It must a hosted endpoint with public access.
    AccountReference: "account", // This is what the customer would have put as account number if they used normal mpesa
    passKey: process.env.lnmPassKey, // Lipa na mpesa passkey in test credentials page
    TransactionType: "CustomerPayBillOnline" /* OPTIONAL */,
    TransactionDesc: "Sending Money" /* OPTIONAL */,
  })
  .then((response) => {
    //Do something with the response
    //eg
    console.log("res");
    console.log(response);
  })
  .catch((error) => {
    //Do something with the error;
    //eg
    console.log("error");
    console.error(error);
  });
  return (
    <div className="app">
      <h1>Mpesa</h1>
      
    </div>
  );
}

export default App;
