#!/usr/bin/env node
const { url, method='get', verifyResponseHeader, verifyResponseStatus=200 } = require('yargs').argv

if (!url) {
  console.log('\n\tusage: node ./health-check.js --url <url> --method <method> --verify-response-header <name=value> --verify-status-code=<status_code>\n')
  process.exit(0)
}

console.log('Running health check with parameters:')
console.log('url', url)
console.log('method', method)
console.log('verifyResponseHeader', verifyResponseHeader)
console.log('verifyResponseStatus', verifyResponseStatus)

// See https://delicate-sunset-4365.moovweb.cloud/ for instructions and test URLs
// We've already parsed the command line arguments for you using the code above
// Begin adding your code here.  Feel free to add additional npm libraries and additional js files.
// Good luck!

