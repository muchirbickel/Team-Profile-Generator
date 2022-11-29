const fs = require("fs");
const path = require("path");

let team = ``;
function addManager(manager){
   team += `
   <section class="team-member">
    <div class="team-heading">
        <h2 class="name">${manager.getName()}</h2>
        <h3 class="role">${manager.getRole()}</h3>
    </div><div class="team-info">
        <p>ID: ${manager.getId()}</p>
        <p>Email:<a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></p>
        <p>Office number: ${manager.getOfficeNumber()}</p>
    </div>
</section>
`;
}

function addEngineer(engineer){
    team += `
    <section class="team-member">
    <div class="team-heading">
        <h2 class="name">${engineer.getName()}</h2>
        <h3 class="role">${engineer.getRole()}</h3>
    </div><div class="team-info">
        <p>ID: ${engineer.getId()}</p>
        <p>Email:<a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></p>
        <p>GitHub:<a href="https://github.com"> ${engineer.getGithub()}</a></p>
    </div>
</section>
`;
}

function addIntern(intern){
    team += `
    <section class="team-member">
    <div class="team-heading">
        <h2 class="name">${intern.getName()}</h2>
        <h3 class="role">${intern.getRole()}</h3>
    </div><div class="team-info">
        <p>ID: ${intern.getId()}</p>
        <p>Email:<a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></p>
        <p>School: ${intern.getSchool()}</p>
    </div>
</section>
`;
}

function generateHTML(){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/team.css">
        <title>Team Information</title>
    </head>
    <body>
    
        <header>
            <h1>My Team</h1>
        </header>
    
        <main>
             <section class="top-layer">
                ${team}
            </section> 
        </main>
    </body>
    </html>`;
}
const DIST_DIR = path.resolve(__dirname, '../dist/html');
const distPath = path.join(DIST_DIR, 'team.html');
function writeData(){
    const myData = generateHTML();
    fs.writeFile(distPath, myData, (err) => {
        err ? console.log(err) : console.log("Success");
    });
}

module.exports = {
    addManager,
    addEngineer,
    addIntern,
    writeData
};
