/*

SpeakEZ - POC outbound calling and teleconference dispatching
February, 2016

*/

// pre setting
var script_path = '/home/sharicus/Desktop/outbound_call/scripts/telecon_poc';
var call_string_pre = "originate {ignore_early_media=true,origination_caller_id_name=SpeakEZ,origination_caller_id_number=+13152165258}";

// to test on fs_cli
/*
jsrun //home/sharicus/Desktop/outbound_call/scripts/telecon_poc/call_dispatcher.js
*/

//system gateway
var gateway ='sofia/gateway/Twilio-outbound';


// generate string for call origination
function format_call() {
	//tweak caller_id/call_handler here	
	var call_handler = ' \'&javascript('+script_path+'/call_handler.js 1 119093900003)\'';
	var call_string = call_string_pre + gateway + '/119093900003';
	console_log('info', call_string + call_handler+'\n');

	return call_string + call_handler;
}

console_log('notice', 'initiate call \n');
apiExecute('bgapi', format_call());


