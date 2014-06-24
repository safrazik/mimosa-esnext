"use strict";

var logger = null;
var config = require("./config");
var extenstions = ["js"];
var getExtensions = function (mimosaConfig) {
	logger = mimosaConfig.log;
	return mimosaConfig.esnext.extensions;
};

var traceur = require('traceur');

var compile = function (mimosaConfig, file, cb) {
	
	
	var hasJsExtension = file.inputFileName.indexOf('.js') !== -1;
	
	file.outputFileText = file.inputFileText;
	
	if (!hasJsExtension || !mimosaConfig.esnext.containsText
		|| file.inputFileText.indexOf(mimosaConfig.esnext.containsText) !== -1) {
		file.outputFileText = file.outputFileText.replace(mimosaConfig.esnext.containsText, '');
		var traceurOptions = mimosaConfig.esnext.traceurOptions;
		traceurOptions.filename = file.outputFileName;
		var output = traceur.compile(file.outputFileText, traceurOptions);
		if (output.js) {
			file.outputFileText = output.js;
		}
		if (output.errors && output.errors.length) {
			logger.error("ES6 Compilation faild [[ " + file.inputFileName + " ]]");
			logger.error(output.errors);
			file.outputFileText = '; throw new Error(\'Invalid source file "' + file.inputFileName + '"\');';
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