#!/usr/bin/env node
const axios = require('axios');

const {url, method = 'get', verifyResponseHeader, verifyResponseStatus = 200} = require('yargs').argv;
const supportedMethods = ['get', 'post', 'put', 'delete'];

if (!url) {
    console.log('\n\tusage: node ./health-check.js --url <url> --method <method> --verify-response-header <name=value> --verify-status-code=<status_code>\n')
    process.exit(0)
}

const headerKey = verifyResponseHeader && verifyResponseHeader.split('=')[0];
const headerValue = verifyResponseHeader && verifyResponseHeader.split('=')[1];

console.log('Running health check with parameters:');
console.log('url', url);
console.log('method', method);
console.log('verifyResponseHeader', verifyResponseHeader);
console.log('verifyResponseStatus', verifyResponseStatus);
console.log('--------------------------------------------------');

if (!supportedMethods.includes(method.toLowerCase())) {
    console.log('Not supported method');
    process.exit(1);
}


const wrapper = async () => {
    try {
        const res = await axios({
            method: method,
            url: url
        });

        if (verifyResponseStatus && res.status !== verifyResponseStatus) {
            console.log('Wrong response status: ' + res.status);

            process.exit(1);
        }

        if (verifyResponseHeader && res.headers[headerKey] !== headerValue) {
            console.log('Wrong headers');

            process.exit(1);
        }

        console.log('Healthy!');
        console.log('Status:' + res.status);
        verifyResponseHeader ? console.log(verifyResponseHeader) : null;

        process.exit(0);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

wrapper();


// See https://delicate-sunset-4365.moovweb.cloud/ for instructions and test URLs
// We've already parsed the command line arguments for you using the code above
// Begin adding your code here.  Feel free to add additional npm libraries and additional js files.
// Good luck!
