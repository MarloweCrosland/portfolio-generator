const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);




const printProfileData = x => {
   x.forEach(profileItem => console.log(profileItem));
};