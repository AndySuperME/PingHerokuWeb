const request = require('request');
var dateFormat = require('dateformat');
const url = 'https://andyopbot.herokuapp.com/';


setInterval(function(){
    var now = new Date();
    dateFormat.masks.hammerTime = 'HH';
    var h = dateFormat(now, "hammerTime");
    console.log(h);
    
    if (h == '07' || h == '08'|| h == '09'|| h == '10'|| h == '11'|| h == '12'|| h == '13'|| h == '14'|| h == '15'|| h == '16'|| h == '17'|| h == '18'|| h == '19'|| h == '20'|| h == '21'|| h == '22'|| h == '23'){
        pingWeb();
    }
}, 1200000);

function pingWeb() {
    request(url, (err, res, body) => {
        console.log(body)
      })
}
