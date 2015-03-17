// HomeKit types required
var types = require("./types.js")
var exports = module.exports = {};

var exec = require('child_process');

function sendOn(){
    exec.exec('sudo /usr/bin/remote -m 11',
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);

                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
}

function sendOff(){
    exec.exec('sudo /usr/bin/remote -m 10',
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);

                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
}

var execute = function(accessory,characteristic,value){ 

    if(value)
    {    
        sendOn();
    } else {
        sendOff();
    }

    console.log("executed accessory: " + accessory + ", and characteristic: " + characteristic + ", with value: " +  value + "."); 
    
}

exports.accessory = {
  displayName: "Coffeemaker",
  username: "CC:33:3D:FF:6A:FA",
  pincode: "031-45-154",
  services: [{
    sType: types.ACCESSORY_INFORMATION_STYPE, 
    characteristics: [{
    	cType: types.NAME_CTYPE, 
    	onUpdate: null,
    	perms: ["pr"],
		format: "string",
		initialValue: "Coffeemaker",
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Name of the accessory",
		designedMaxLength: 255    
    },{
    	cType: types.MANUFACTURER_CTYPE, 
    	onUpdate: null,
    	perms: ["pr"],
		format: "string",
		initialValue: "Liniger Solutions",
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Manufacturer",
		designedMaxLength: 255    
    },{
    	cType: types.MODEL_CTYPE,
    	onUpdate: null,
    	perms: ["pr"],
		format: "string",
		initialValue: "Rev-1",
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Model",
		designedMaxLength: 255    
    },{
    	cType: types.SERIAL_NUMBER_CTYPE, 
    	onUpdate: null,
    	perms: ["pr"],
		format: "string",
		initialValue: "1337",
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "SN",
		designedMaxLength: 255    
    },{
    	cType: types.IDENTIFY_CTYPE, 
    	onUpdate: null,
    	perms: ["pw"],
		format: "bool",
		initialValue: false,
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Identify Accessory",
		designedMaxLength: 1    
    }]
  },{
    sType: types.FAN_STYPE, 
    characteristics: [{
    	cType: types.NAME_CTYPE,
    	onUpdate: null,
    	perms: ["pr"],
		format: "string",
		initialValue: "Coffeemaker Control",
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Name of service",
		designedMaxLength: 255   
    },{
    	cType: types.POWER_STATE_CTYPE,
    	onUpdate: function(value) { console.log("Change:",value); execute("Coffeemaker", "Coffeemaker Power", value); },
    	perms: ["pw","pr","ev"],
		format: "bool",
		initialValue: false,
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Change the power state of the Coffeemaker",
		designedMaxLength: 1    
    }]
  }]
}
