const inquirer = require('inquirer');
//const fs = require('fs');
//const generatePage = require('./src/page-template');

const promptUser = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself',
    },
]);
};



const promptProject = (portfolioData) => {
 // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
    portfolioData.projects = [];
  }


    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }

      // pushing all the answers from inquirer into projects array
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        //if confirmAdd is true, return and prompt again, if false return answer array
        if (projectData.confirmAddProject){
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    })
  };


//calling the functions and displaying the answers
  promptUser()
  .then(promptProject)
  .then(portfolioData => {
      console.log(portfolioData);
});



















// const pageHTML = generatePage(x,y);











//   fs.writeFile('index.html', generatePage(x,y), err=> {
//       if (err) throw new Error(err);

//       console.log('portfolio complete Check out index.html');
//   });