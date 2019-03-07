var fs = require('fs');

if (process.argv.length !== 3) {
    console.error('Exactly one argument required');
    process.exit(1);
}

var input = process.argv[2];
var output = input + '.AFTER';

// Read the entire file asynchronously, with a callback to replace the r's and l's
// with w's then write the result to the new file.
fs.readFile(input, 'utf-8', function (err, text) {
    if (err) throw err;
    var fuddified = text.replace(/[rl]/g, 'w').replace(/[RL]/g, 'W')
    fs.writeFile(output, fuddified, function (err) {
        if (err) throw err;
    });
});