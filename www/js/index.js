/* MOST OF THIS WILL BE PSEUDO CODE RIGHT NOW UNTIL I FIGURE OUT HOW TO PROPERLY IMPLEMENT CORDOVA API'S
*Note, this is an incredibly simplified view of what it will look like, it is more for structural and planning purposes.

Useful Links: https://github.com/bcsphere/bluetooth
              http://docs.phonegap.com/en/edge/cordova_accelerometer_accelerometer.md.html#Accelerometer
              https://www.npmjs.com/package/bluetooth-terminal
              
https://www.w3.org/TR/orientation-event/
https://www.npmjs.com/package/cordova-plugin-bluetoothle


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
*/
//This is plagiarism my dude

document.addEventListener('deviceready', function () {

    new Promise(function (resolve) {

        bluetoothle.initialize(resolve, { request: true, statusReceiver: false });

    }).then(initializeSuccess, handleError);

});



function initializeSuccess(result) {

    if (result.status === "enabled") {

        log("Bluetooth is enabled.");
        log(result);
    }

    else {

        document.getElementById("start-scan").disabled = true;

        log("Bluetooth is not enabled:", "status");
        log(result, "status");
    }
}


function handleError(error) {

    var msg;

    if (error.error && error.message) {

        var errorItems = [];

        if (error.service) {

            errorItems.push("service: " + (uuids[error.service] || error.service));
        }

        if (error.characteristic) {

            errorItems.push("characteristic: " + (uuids[error.characteristic] || error.characteristic));
        }

        msg = "Error on " + error.error + ": " + error.message + (errorItems.length && (" (" + errorItems.join(", ") + ")"));
    }

    else {

        msg = error;
    }

    log(msg, "error");

    if (error.error === "read" && error.service && error.characteristic) {

        reportValue(error.service, error.characteristic, "Error: " + error.message);
    }
}



function log(msg, level) {

    level = level || "log";

    if (typeof msg === "object") {

        msg = JSON.stringify(msg, null, "  ");
    }

    console.log(msg);

    if (level === "status" || level === "error") {

        var msgDiv = document.createElement("div");
        msgDiv.textContent = msg;

        if (level === "error") {

            msgDiv.style.color = "red";
        }

        msgDiv.style.padding = "5px 0";
        msgDiv.style.borderBottom = "rgb(192,192,192) solid 1px";
        document.getElementById("output").appendChild(msgDiv);
    }
}



var foundDevices = [];

function startScan() {

    log("Starting scan for devices...", "status");

    foundDevices = [];

    document.getElementById("devices").innerHTML = "";
    document.getElementById("services").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    if (window.cordova.platformId === "windows") {

        bluetoothle.retrieveConnected(retrieveConnectedSuccess, handleError, {});
    }
    else {

        bluetoothle.startScan(startScanSuccess, handleError, { services: [] });
    }
}


function startScanSuccess(result) {

    log("startScanSuccess(" + result.status + ")");

    if (result.status === "scanStarted") {

        log("Scanning for devices (will continue to scan until you select a device)...", "status");
    }
    else if (result.status === "scanResult") {

        if (!foundDevices.some(function (device) {

            return device.address === result.address;

        })) {

            log('FOUND DEVICE:');
            log(result);
            foundDevices.push(result);
            addDevice(result.name, result.address);
        }
    }
}


function retrieveConnectedSuccess(result) {

    log("retrieveConnectedSuccess()");
    log(result);

    result.forEach(function (device) {

        addDevice(device.name, device.address);

    });
}


function addDevice(name, address) {

    var button = document.createElement("button");
    button.style.width = "100%";
    button.style.padding = "10px";
    button.style.fontSize = "16px";
    button.textContent = name + ": " + address;

    button.addEventListener("click", function () {

        document.getElementById("services").innerHTML = "";
        connect(address);
    });

    document.getElementById("devices").appendChild(button);
}

function connect(address) {

    log('Connecting to device: ' + address + "...", "status");

    if (cordova.platformId === "windows") {

        getDeviceServices(address);

    }
    else {

        stopScan();

        new Promise(function (resolve, reject) {

            bluetoothle.connect(resolve, reject, { address: address });

        }).then(connectSuccess, handleError);

    }
}

function stopScan() {

    new Promise(function (resolve, reject) {

        bluetoothle.stopScan(resolve, reject);

    }).then(stopScanSuccess, handleError);
}

function stopScanSuccess() {

    if (!foundDevices.length) {

        log("NO DEVICES FOUND");
    }
    else {

        log("Found " + foundDevices.length + " devices.", "status");
    }
}


function connectSuccess(result) {

    log("- " + result.status);

    if (result.status === "connected") {

        getDeviceServices(result.address);
    }
    else if (result.status === "disconnected") {

        log("Disconnected from device: " + result.address, "status");
    }
}

//I think so anyway


//Bluetooth plugin initialize
function btinitialize(){
    bluetoothle.initialize(initializeResult, params);
}

var btScan = document.getElementById("BTSearch");
function btSearch(){
    alert("Hello?");
}
btScan.addEventListener("click", btSearch);

/*

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



 Page 3 Javascript
*/

//A clever person could iterate these functions to be more efficient, however I am not a clever person.

//Vibrate once function
var one = document.getElementById("numberOne");
function vibOne() {
        navigator.vibrate(500);
}

one.addEventListener("click", vibOne);

//Vibrate twice function
var two = document.getElementById("numberTwo");
function vibTwo() {
        navigator.vibrate([500, 500, 500]);
}

two.addEventListener("click", vibTwo);

//Vibrate three times function
var three = document.getElementById("numberThree");
function vibThree() {
        navigator.vibrate([500, 500, 500, 500, 500]);
}

three.addEventListener("click", vibThree);

//Vibrate four times function
var four = document.getElementById("numberFour");
function vibFour() {
        navigator.vibrate([500, 500, 500, 500, 500, 500, 500]);
}
four.addEventListener("click", vibFour);

//Vibrate five times function
var five = document.getElementById("numberFive");
function vibFive() {
        navigator.vibrate([500, 500, 500, 500, 500, 500, 500, 500, 500]);
}
five.addEventListener("click", vibFive);

//Vibrate six times function
var six = document.getElementById("numberSix");
function vibSix() {
        navigator.vibrate([500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500]);
}
six.addEventListener("click", vibSix);