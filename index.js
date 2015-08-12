#!/usr/bin/env node

var program = require('commander');
var request = require('request');
var fs = require('fs');

program
  .version('0.0.1')
  // .option('-a, --add', 'Add .gitignore')
  .parse(process.argv);

var ws = fs.createWriteStream('.gitignore');
ws.on("finish", function(){
	console.log("done.");
});
request
  .get('https://github.com/hcnode/node-gitignore/blob/master/.gitignore')
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(ws);

