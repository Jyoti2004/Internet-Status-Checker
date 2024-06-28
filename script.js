// https://www.ipify.org/--- go to this site to get api

window.addEventListener("load", checkInternetConnection);

function checkInternetConnection() {

  const statusText = document.getElementById('statusText');
  const ipAddressText = document.getElementById('ipAddressText');
  const networkStrengthText = document.getElementById('networkStrengthText');

  statusText.textContent = 'Checking...';

  // checks the online status of the browser
  if(navigator.onLine){
    // to retrieve public IP address of the client.
    fetch('https://api.ipify.org/?format=json')
    // converts HTTP response to a JSON object.
    .then((response) => response.json())
    //Handles the retrieved JSON data.
    .then((data) => {
       statusText.textContent = 'Connected';
       ipAddressText.textContent = data.ip;
       
      // Retrieves the connection object from the navigator.
       const connection = navigator.connection;
       const networkStrength = connection?connection.downlink + 'Mbps' :'Unknown';
// If connection object exists, calculates the network downlink speed (downlink) and appends 'Mbps'. Otherwise, sets networkStrength to 'Unknown'.

       networkStrengthText.textContent =networkStrength;
     })
     .catch(()=>{
      statusText.textContent = 'Disconnected';
      ipAddressText.textContent = '-';
      networkStrengthText.textContent = '-';
     })
  }else{
    statusText.textContent = 'Disconnected';
    ipAddressText.textContent = '-';
    networkStrengthText.textContent = '-';
  }
}