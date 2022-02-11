const fs = require("fs");
const path = require("path");

const settingsFilePath = path.join(__dirname,"../json/settings.json");
console.log("settingsFilePath: " + settingsFilePath);

function getSettings() {
  const settingsData = fs.readFileSync(settingsFilePath);
  return JSON.parse(settingsData);
}

function writeSettings(newSettings) {
  const settingsJson = JSON.stringify(newSettings, null, 2);
  try {
    fs.writeFileSync(settingsFilePath, settingsJson);
    return true;
  } catch {
    return false;
  }
}

function getDefaultDir() {
  const defaultDir = getSettings().defaultDir || process.cwd();
  return isValidDir(defaultDir) ? defaultDir : process.cwd();
}

function isValidDir(dirPath) {
  try {
    fs.readdirSync(dirPath);
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  getSettings,
  writeSettings,
  getDefaultDir,
  isValidDir
};
