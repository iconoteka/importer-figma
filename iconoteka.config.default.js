const path = require('path');

function defaultConfig(cwd) {
return {
    cwd,
    componentsOverrides: 
        {
            
        },
    publicFiles: [],
    iconotekaJson: path.join(cwd, 'iconoteka', 'iconoteka.json'),
    iconotekaFilesPath: path.join(cwd, 'iconoteka')
};
}

module.exports = defaultConfig;
