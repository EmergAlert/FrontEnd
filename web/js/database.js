//mongoDB setup
var mongoose = require('mongoose');
require('dotenv').config();
var request = require('request');

var uri = process.env.DB_URL;
mongoose.connect(uri);
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('MongoDB successfully  connected!');
});

request('https://api.mlab.com/api/1/databases/athenahacks/collections/Messages?apiKey=o2gZ1lynVLWp2xf46oNSrA0avHlH5rUI', { json: true }, (err, res, main) => {
  if (err) { return console.log(err); }
  console.log(main.length);
  for(var i = 0; i < main.length; i++){
    console.log(main[i]["Message"]);
    $("#panel1").click(function(){
    $("h4").append("<p>" + main[i]["Message"] + "</p>");
});
}
});
