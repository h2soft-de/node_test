var os = require('os');
var timespan = require('timespan');

console.log('Hostname: ' + os.hostname());
console.log('Platform: ' + os.platform());
console.log('CPUs: ' + os.cpus()[0].model);
console.log('Release: ' + os.release());
console.log('User: ' + os.userInfo().username);

var uptime = timespan.fromSeconds(os.uptime());
console.log('Uptime: ' + uptime.totalMinutes());

 var ts = timespan.fromSeconds(90);
  console.log(ts.totalMilliseconds()); // 90000 
  console.log(ts.totalSeconds());      // 90 
  console.log(ts.totalMinutes());      // 1.5 
  console.log(ts.totalMinutes(true));  // 1 