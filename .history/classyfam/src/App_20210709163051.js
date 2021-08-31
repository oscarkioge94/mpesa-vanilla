
import './App.css';

function App() {
  
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer DrSlkVDc6hbydwil2dtwDXezeEff");
​
fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjEwNzA5MTYyMzI5",
    "Timestamp": "20210709162329",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 1,
    "PartyA": 254708374149,
    "PartyB": 174379,
    "PhoneNumber": 254710830759,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X" 
  })
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));
  return (
    <div className="app">
      <h1>Mpesa</h1>
      
    </div>
  );
}

export default App;
