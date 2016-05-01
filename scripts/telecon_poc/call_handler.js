/*

SpeakEZ - POC outbound calling and teleconference handler
February, 2016

*/

// arguments
var recipient_no = argv[0];

// database connection establising
//use("ODBC");
// DSN and credentials
//var db = new ODBC("freeswitch", "root", "Karen753CIS");
//db.connect();
//db.query('use freedomfone');

      
//var sql = 'INSERT INTO  poll_response (poll_id, recipient_no, question_id, answer_key) VALUES ('+poll_id+', '+recipient_no+','+current_question+','+data.digit+')';
//db.query(sql);


console_log('warning', 'call handler activated ' + recipient_no + '\n');

session.answer();
while ( session.ready( ) ) {

   /* 
    var sql = 'INSERT INTO  voice_delivery (voice_id, batch_id, recipient_number, deliver_status) VALUES ('+voice_id+', 0, "'+recipient_no+'", "deliveried")';
	db.query(sql);
	*/
	
	// throw session to hw1@default
	session.execute('conference', 'hw1@default');

	//console_log('warning', 'call ended ' + sql + '\n');
	console_log('warning', 'call ended\n');

}





