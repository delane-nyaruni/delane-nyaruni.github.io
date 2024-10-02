const os = require('os');
const http = require('http');
const fs = require('fs');


function checkSystemMemory(){
  // detect underlying system memory
  var osInput = os.totalmem();
  console.log(osInput);
}

checkSystemMemory();