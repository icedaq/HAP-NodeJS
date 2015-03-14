// HomeKit types required
var types = require("./types.js")
var exports = module.exports = {};

// Replace this here with something useful.
var execute = function(accessory,characteristic,value){ console.log("executed accessory: " + accessory + ", and characteristic: " + characteristic + ", with value: " +  value + "."); }

exports.accessory = {
  displayName: "Coffee",
  username: "CC:22:3D:EE:5E:FA",
  pincode: "031-45-154",
  services: [{
    sType: types.ACCESSORY_INFORMATION_STYPE, 
    characteristics: [{
    	cType: types.NAME_CTYPE, 
    	onUpdate: null,
    	perms: ["pr"],
		format: "string",
		initialValue: "Coffee",
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
		initialValue: "RANDOMNR",
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
		initialValue: "Make coffee",
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Name of service",
		designedMaxLength: 255   
    },{
    	cType: types.POWER_STATE_CTYPE,
    	onUpdate: function(value) { console.log("Change:",value); execute("Fan", "Fan Power", value); },
    	perms: ["pw","pr","ev"],
		format: "bool",
		initialValue: false,
		supportEvents: false,
		supportBonjour: false,
		manfDescription: "Make some coffee.",
		designedMaxLength: 1    
    }]
  }]
}
