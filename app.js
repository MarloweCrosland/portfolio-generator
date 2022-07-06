const fs = require('fs');
const profileDataArgs = process.argv.slice(2);
const generatePage = require('./src/page-template.js');

const [x, y] = profileDataArgs;



  fs.writeFile('index.html', generatePage(x,y), err=> {
      if (err) throw new Error(err);

      console.log('portfolio complete Check out index.html');
  });