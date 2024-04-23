const {writeFile, fdatasync} = require('fs')
/*
writeFile('test.txt', 'nodejstest',null,(err) => {
    if (err) {
        console.error('error = ',err);
        return;
    }

    console.log('Write file completed');
    function add(a,b) {
        return a+b;
    }
    console.log('Add Result = ',add(1,2));
});
*/

function  writeFilePromise() {
    return new Promise((resolve,reject) => {
      writeFile('testfile.txt','INSTALL BABEL!! = npm i --s-dev @babel/core @babel/cli @babel/preset-env @babel/node',null,(err) => {
        if (err) {
            reject(err);
            return;
        }
        resolve('write file completed');
      });
    });
}

function add(a,b) {
    return a+b;
}

async function main() {
    const writeFileResult = await writeFilePromise();
    console.log('Result = ' , writeFileResult);

    console.log('Add Result = ' , add(1,2));
}

main();