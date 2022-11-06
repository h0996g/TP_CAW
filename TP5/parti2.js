const fs = require('fs').promises;
const fss = require('fs');
const path = require('path');
var isfindR = false;
let regex = /houss/
input = path.join(__dirname, './folder1');


// if directory exists in the System...
if (fss.existsSync(input)) {
    //if input is not dirrectory..
    if (fss.statSync(input).isDirectory()) {

        // fileOps Read the files and if it finds a folder it calls the function folderOps()

        fileOps = async (input) => {
            try {
                data = await fs.readdir(input)
                data.forEach(async element => {
                    try {
                        if (!fss.statSync(`${input}/${element}`).isDirectory()) {
                            data1 = await fs.readFile(`${input}/${element}`)
                            // is file :..
                            if (data1.toString().match(regex)) {
                                isfindR = true;
                                console.log(element)
                            }

                        }
                        //is dir..
                        else
                            if (fss.statSync(`${input}/${element}`).isDirectory()) {
                                folderOps(input + '/' + element);
                            }
                    } catch (error) {
                        console.error(error)
                    }
                });

            } catch (error) {
                console.error(error)
            }
        }
        // folderOps Read the folders and if it finds a file it calls the function filerOps()


        folderOps = async (input) => {
            try {

                data = await fs.readdir(input)
                data.forEach(async element => {
                    try {

                        if (fss.statSync(`${input}/${element}`).isDirectory()) {

                            fileOps(input + '/' + element)
                        } else if (!fss.statSync(`${input}/${element}`).isDirectory()) {
                            data1 = await fs.readFile(`${input}/${element}`)

                            if (data1.toString().match(regex)) {
                                console.log(element)


                                isfindR = true;
                            }
                        }
                    } catch (error) {
                        console.error(error)
                    }
                });

            } catch (error) {
                console.error(error)

            }

        }

    }
    // if the input is file Direct (reduce work) ... 

    else {

        fileOps = async (input) => {

            data = await fs.readFile(input)
            if (data.toString().match(regex)) {
                console.log(path.basename(input))
                isfind = true
            } else {
                console.log('NON')

            }
        }

    }
    // Call fileOps()
    fileOps(input)
    if (isfindR = false) {
        console.log('NON')
    }
}

//directory not exists in the System...

else {
    console.log('Path not found.')
}




