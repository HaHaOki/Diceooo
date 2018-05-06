/* MOST OF THIS WILL BE PSEUDO CODE RIGHT NOW UNTIL I FIGURE OUT HOW TO PROPERLY IMPLEMENT CORDOVA API'S
*Note, this is an incredibly simplified view of what it will look like, it is more for structural and planning purposes.

Useful Links: https://github.com/bcsphere/bluetooth
              http://docs.phonegap.com/en/edge/cordova_accelerometer_accelerometer.md.html#Accelerometer
              https://www.npmjs.com/package/bluetooth-terminal

-- Possible function to see if bluetooth is enabled --
$(document).ready(function checkBTEnabled(){
If Bluetooth is disabled
message.alert("Bluetooth is disabled, please turn it on before continuing")
});

--Bluetooth Search Stuff--

Button on click event listener.
(Using the BT API / plugins)
Bluetooth.initiateScan;
message.alert(Results);


document.getElementById("BtSearch").onclick = btSearch;

*/

function btSearch() {
    
    // Obtain configured instance.
let terminal = new BluetoothTerminal();
 
// Override `receive` method to handle incoming data as you want.
terminal.receive = function(data) {
  alert(data);
};
 
// Request the device for connection and get its name after successful connection.
terminal.connect().then(() => {
  alert(terminal.getDeviceName() + ' is connected!');
});
}


function testFunction() {
    
    // Disconnect from the connected device.
terminal.disconnect();
}

/*

$("#BtSearch").click(BtSearch() {
alert("Button for searching tapped");
connect();
});

$("#BTDisconnect").click(BtDisconnect() {
alert("Button for disconnecting tapped");
disconnect();
});

Optional message to ask if they're sure they want to pair to the device.

Once paired, prompt to move onto page 2 when ready or something.

--Accelerometer plugin / api will be used here--

If (connected device.position > FFFFFF && < FFFFFF) {
html.picture = 1
}

If (connected device.position > FFFFFF && < FFFFFF) {
html.picture = 2
}

If (connected device.position > FFFFFF && < FFFFFF) {
html.picture = 3
}

If (connected device.position > FFFFFF && < FFFFFF) {
html.picture = 4
}

If (connected device.position > FFFFFF && < FFFFFF) {
html.picture = 5
}

If (connected device.position > FFFFFF && < FFFFFF) {
html.picture = 6
}

*/