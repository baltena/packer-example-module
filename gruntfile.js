module.exports = function(grunt) {

	require('packer-module')(grunt);
	require('packer-unit')(grunt);
	require('packer-e2e')(grunt);

	grunt.registerTask('default', [
		'module'
	]);
	
	grunt.registerTask('run', [
		'module:run'
	]);
};	