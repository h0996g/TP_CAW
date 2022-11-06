const fs = require('fs');
const path = require('path');
var isfind = true;
let regex = /houss/
input = path.join(__dirname, '/folder1');
// if directory exists in the System...
if (fs.existsSync(input)) {

    //if input is not dirrectory..
    if (!fs.statSync(input).isDirectory()) {
        // Read input once because it is one File
        fs.readFile(input, function (err, data) {
            if (err) throw err;
            if (data.toString().match(regex)) {
                // l’expression régulière == true and print filename

                console.log(path.basename(input))
                isfind = true
            } else {
                // l’expression régulière == false
                console.log('NON')

            }
        });

    }
    // if input is dir === many files
    else {

        fs.readdir(input, function (err, data) {
            if (err) throw err;

            data.forEach(element => {

                // It Should not be a file or get an error when reading
                if (!fs.statSync(`${input}/${element}`).isDirectory()) {
                    fs.readFile(`${input}/${element}`, function (err, data) {
                        if (err) throw err;
                        if (data.toString().match(regex)) {
                            // l’expression régulière == true and print file names
                            console.log(element)
                            isfind = true
                        }
                    });
                }
            });

        });
    }

    // l’expression régulière == true
    if (isfind == false) {

        console.log('NON')
    }
}
//directory not exists in the System...
else {
    console.log('Path not found.')
}



