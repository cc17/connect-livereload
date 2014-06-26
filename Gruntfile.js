/**
 * 自动化脚本定义
 */
module.exports = function (grunt) {
  'use strict';

   var cfg = {
   	livereload:35729,
   	serverPort:3001,
   	serverHost:'localhost'
   };

    //load all grunt tasks
  	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  	grunt.initConfig({
  		cfg:cfg,
  		pkg:grunt.file.readJSON('package.json'),
  		connect: {
  		  options: {
  		    port: cfg.serverPort,
  		    hostname: cfg.serverHost,
  		    base:'/'
  		  },
  		  dev: {
  		    options: {
  		      middleware: function (connect) {
  		        return [
  		          require('connect-livereload')({port: cfg.livereload})
  		          //connect.static('src/')
  		        ];
  		      }
  		    }
  		  }
  		},
  		watch:{
  			options:{
					livereload:true
			},
  			html:{
  				files:'**/*.html',
  				//tasks:'connect:server',
  				
  			}
  		},
  		open:{
  			dev:{
  				url:'http://'+ cfg.serverHost +':' + cfg.serverPort
  			}
  		}
  	});
  	grunt.registerTask('dev',['connect:dev','open:dev','watch']);

};