/* MOST OF THIS WILL BE PSEUDO CODE RIGHT NOW UNTIL I FIGURE OUT HOW TO PROPERLY IMPLEMENT CORDOVA API'S
*Note, this is an incredibly simplified view of what it will look like, it is more for structural and planning purposes.

Useful Links: https://github.com/bcsphere/bluetooth - Bluetooth plugin (Github)
              http://docs.phonegap.com/en/edge/cordova_accelerometer_accelerometer.md.html#Accelerometer - Documentation on Accelerometer
              https://www.npmjs.com/package/bluetooth-terminal - Bluetooth plugin (npmjs)
              https://www.npmjs.com/package/nativescript-accelerometer-advanced - Accelerometer plugin (npjms)

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