//randomizer functions for random audio path.

const fs = require('fs');
const path = require('path');

//absolute path to audio
const folderPath = './Audio/';
const folderPathHunter = './Audios_fijos/hunterx';
//read folder names on a path
const folderNames = fs.readdirSync(folderPath);
const filesNamesHunter = fs.readdirSync(folderPathHunter);

module.exports.sendRandomName = () => {
    let filesPathName = folderNames[randomizer(folderNames)];
    return folderPath + filesPathName + "/" + returnRandomFile(filesPathName);
}

module.exports.sendRandomHunter = () => {
    let min = 0;
    let max = filesNamesHunter.length;
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    let dirPath = path.join(__dirname, folderPathHunter);
    const arrayFiles = fs.readdirSync(dirPath);
    return folderPathHunter + "/" + arrayFiles[randomizer(arrayFiles)];
}

function returnRandomFileHunter(pathFolder) {
    let dirPath = path.join(__dirname, folderPathHunter, pathFolder)
    const arrayFiles = fs.readdirSync(dirPath);
    return arrayFiles[randomizer(arrayFiles)];
}

function returnRandomFile(pathFolder) {
    let dirPath = path.join(__dirname, folderPath, pathFolder)
    const arrayFiles = fs.readdirSync(dirPath);
    return arrayFiles[randomizer(arrayFiles)];
}

//randomizer number **WORKS WITH ARRAY ONLY**
function randomizer(array) {
    let min = 0;
    let max = array.length;
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}

module.exports.nullify = (value) => {
    switch (value) {
        case null:
            return false;
            break;
        case undefined:
            return false;
            break;
        default:
            return true;
            break;
    }
}