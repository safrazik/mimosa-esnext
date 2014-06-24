"use strict";

exports.defaults = function() {
  return {
    esnext: {
		extensions: ["js"],
		containsText: "use esnext",
		traceurOptions: {
			modules: "commonjs",
			experimental: true
		}	  
    }
  };
};

exports.placeholder = function() {
  return "";
};

exports.validate = function( config, validators ) {
  var errors = [];
  return errors;
};