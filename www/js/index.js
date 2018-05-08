/* MOST OF THIS WILL BE PSEUDO CODE RIGHT NOW UNTIL I FIGURE OUT HOW TO PROPERLY IMPLEMENT CORDOVA API'S
*Note, this is an incredibly simplified view of what it will look like, it is more for structural and planning purposes.

Useful Links: https://github.com/bcsphere/bluetooth
              http://docs.phonegap.com/en/edge/cordova_accelerometer_accelerometer.md.html#Accelerometer
              https://www.npmjs.com/package/bluetooth-terminal
              
https://www.npmjs.com/package/cordova-plugin-bluetoothle
(This is useful for the above; https://www.promisejs.org/)
*/

//CSS changes since I'm not touching that JQuery css file
$("#page1").css("background-color", "black");
$("#page2").css("background-color", "black");
$("#page3").css("background-color", "black");
$("#mypanel").css("background-color", "DeepPink");
$("#header").css("background-color", "DeepPink");
$("#header1").css("background-color", "DeepPink");
$("#footer1").css("background-color", "DeepPink");
$("#header2").css("background-color", "DeepPink");
$("#footer2").css("background-color", "DeepPink");
$("#header3").css("background-color", "DeepPink");
$("#footer4").css("background-color", "DeepPink");
$("p").css("color", "DeepPink");
$("h2").css("color", "DeepPink");

//
//Page 1 Code
//

//Bluetooth plugin initialize
function btinitialize(){
    bluetoothle.initialize(initializeResult, params);
}

//Test function to make sure the javascript still works
var hithere = document.getElementById("BTDisconnect");
function hellothere(){
    alert("Hello?");
}
hithere.addEventListener("click", hellothere);

/*
//
//Page 2 code
//
https://www.w3.org/TR/orientation-event/
https://w3c.github.io/deviceorientation/spec-source-orientation.html
https://blog.phonegap.com/migrating-from-the-cordova-device-motion-plugin-ddd8176632ed

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


//
//Page 3 code
//
*/

var imgnum = 0;
var vibration = 0;

//A clever person could iterate these functions to be more efficient, however I am not a clever person.

//Vibrate once function
var one = document.getElementById("numberOne");
function vibOne() {
        imgnum = 1;
        navigator.vibrate(500);
}

one.addEventListener("click", vibOne);

//Vibrate twice function
var two = document.getElementById("numberTwo");
function vibTwo() {
        imgnum = 2;
        navigator.vibrate([500, 500, 500]);
}

two.addEventListener("click", vibTwo);

//Vibrate three times function
var three = document.getElementById("numberThree");
function vibThree() {
        imgnum = 3;
        navigator.vibrate([500, 500, 500, 500, 500]);
}

three.addEventListener("click", vibThree);

//Vibrate four times function
var four = document.getElementById("numberFour");
function vibFour() {
        imgnum = 4;
        navigator.vibrate([500, 500, 500, 500, 500, 500, 500]);
}
four.addEventListener("click", vibFour);

//Vibrate five times function
var five = document.getElementById("numberFive");
function vibFive() {
        imgnum = 5;
        navigator.vibrate([500, 500, 500, 500, 500, 500, 500, 500, 500]);
}
five.addEventListener("click", vibFive);

//Vibrate six times function
var six = document.getElementById("numberSix");
function vibSix() {
        imgnum = 6;
        navigator.vibrate([500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500]);
}
six.addEventListener("click", vibSix);

//Dice images displayed
var die = document.getElementById("imgChange");
function changeDice(){
    var image = document.getElementById("pictureDisplay");
    image.src="images/Dot_" + imgnum + ".png";
    } 
    die.addEventListener("click", changeDice);

 //Number images displayed
var img = document.getElementById("imgChange");
function changeImage(){
    var image = document.getElementById("numberDisplay");
    image.src="images/Num_" + imgnum + ".png";
    }
    img.addEventListener("click", changeImage);

//If to choose between Dice and Numbers NOT CURRENTLY WORKING
if (document.getElementById("dorn") == ("Dice")){
   changeDice();
}
else{
   changeImage();
}


