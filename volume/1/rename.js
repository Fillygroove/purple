var fs = require('fs');

for (let i = 0; i < 109; i++) {       
    fs.rename(`${i + 1}.jpg`, `${i}.jpg`, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    });
}