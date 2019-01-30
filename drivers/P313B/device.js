'use strict';

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class Shell_Dimmer extends ZwaveDevice {
	onMeshInit() {

		// enable debugging
		this.enableDebug();

		// print the node's info to the console
		this.printNode();

		// register capabilities for this device
		this.registerCapability('onoff', 'BASIC');
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');
	}
}

module.exports = Shell_Dimmer;
