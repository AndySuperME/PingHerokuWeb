const request = require('request');
var dateFormat = require('dateformat');
const url = 'https://andyopbot.herokuapp.com/';


setInterval(function(){
    var now = new Date();
    dateFormat.masks.hammerTime = 'HH';
    var h = dateFormat(now, "hammerTime");
    console.log(h);
    
    if (h == '15' || h == '16'|| h == '17'|| h == '18'|| h == '19'|| h == '20'|| h == '21'|| h == '22'|| h == '23'|| h == '00'|| h == '01'|| h == '02'|| h == '03'|| h == '04'|| h == '05'|| h == '06'|| h == '07'){
        pingWeb();
    }
}, 1200000);

function pingWeb() {
    request(url, (err, res, body) => {
        console.log(body)
      })
}
