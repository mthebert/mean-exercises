var fs = require("fs");
fs.stat('file_stats.js', function(err, stats){
	if(!err){
		console.log('stats: ' + JSON.stringify(stats, null, ' '));
		console.log(stats.isFile() ? "Is a File" : "Is not a file");
		console.log(stats.isDirectory() ? "Is a Folder" : "Is not a folder");
		console.log(stats.isSocket() ? "Is a socket" : "Is not a socket");
		stats.isDirectory();
		stats.isBlockDevice();
		stats.isCharacterDevice();
		// stats.isSymbolicLink(); // only lstat
		stats.isFIFO();
		stats.isSocket();
	}
});