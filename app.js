const inquirer = require('inquirer');
//const fs = require9('fs');
//const generatePage = require('./src/page-template');


inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?',
    }
])
.then(answers => console.log(answers));























// const pageHTML = generatePage(x,y);











//   fs.writeFile('index.html', generatePage(x,y), err=> {
//       if (err) throw new Error(err);

//       console.log('portfolio complete Check out index.html');
//   });