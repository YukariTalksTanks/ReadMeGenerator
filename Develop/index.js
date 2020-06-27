// array of questions for user
const questions = [

];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });

// function to write README file
function writeToFile(fileName, data) {
    
    var fs = require('fs');
    
    fs.appendFile('TestMe.md', 'ReadMe Test', function (err) {
        if (err) throw err;
        console.log('File appended successfully.');
    });
}

// function to initialize program
function init() {
    writeToFile();

}

// function call to initialize program
init();
