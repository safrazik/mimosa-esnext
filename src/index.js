"use strict";

var logger = null;
var config = require("./config");
var getExtensions = function(mimosaConfig) {
            logger = mimosaConfig.log;
            return ['js', 'ts'];
};

var traceur = require('traceur');

var compile = function(mimosaConfig, file, cb) {
    file.outputFileText = file.inputFileText;
    if(file.inputFileName.indexOf('.ts') !== -1 || file.inputFileText.indexOf('use esnext') !== -1){
        file.outputFileText = file.outputFileText.replace('use esnext', 'use strict');
    var output = traceur.compile(file.outputFileText, {
//        sourceMap: true,
        modules: 'amd',
        filename: file.outputFileName,
        experimental: true
    });
    if (output.js) {
        file.outputFileText = output.js;
    }
        if(output.errors && output.errors.length) { 
            logger.error("ES6 Compilation faild [[ " + file.inputFileName + " ]]");
            console.log(output.errors);
        }
}
    cb(null, file.outputFileText);
};

module.exports = {
    name: "esnext",
    compilerType: "javascript",
    compile: compile,
    extensions: getExtensions,
    defaults: config.defaults,
    placeholder: config.placeholder,
    validate: config.validate
};
