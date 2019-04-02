const fs = require('fs');
const { exec } = require('child_process');


let newProjectName = 'My-Project';
if (process.argv.length > 2) newProjectName = process.argv.slice(-1)[0];

const foldersToCreate = [`${newProjectName}`, `${newProjectName}/spec`]

let counter = 0;

foldersToCreate.forEach(folder => {
    fs.mkdir(`${process.cwd()}/${folder}`, {recursive: true}, (error) => {
        if (error) throw error;
        counter++;
        if (counter === foldersToCreate.length) {
            const filesToCreate = ['index.js', 'spec/index.spec.js', 'README.md', 'package.json', '.gitignore', 'eslintrc.js'];

            filesToCreate.forEach(file => {
                fs.writeFile(`${process.cwd()}/${newProjectName}/${file}`, '', (error) => {
                if (error) throw error;
                });
            });
        };
    });
});

exec(`git init ${newProjectName}`, (error,stdout) => {
    if (error){
        console.error(error);
        return;
    }
    console.log(stdout)
})
 


