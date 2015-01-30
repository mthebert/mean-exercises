var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err,db){
	var myDB = db.db("words");
	myDB.collection("word_stats", countItems);
	setTimeout(function(){
		db.close();
	},3000);
});

function countItems(err, words){
	words.count({first:{$in: ['a','b', 'c']}}, function(err, count){
		console.log("words starting with a, b, or c: " + count);
	});
	words.count({size: {$gt: 12}}, function(err, count){
		console.log("words longer than 12 characters: " + count);
	});
	words.count({size:{$mod: [2,0]}}, function(err, count){
		console.log("Words with even lengths: "+ count);
	});
	words.count({letters: {$size: 12}}, function(err, count){
		console.log("Words with 12 distinct characters: "+ count);
	});
	words.count({$and: [{first:{$in: ['a','e','i','o','u']}}, {last:{$in:['a','e','i','o','u']}}]}, function(err, count){
		console.log("Words that start and end with a vowel: "+ count);
	});
	words.count({letters: {$all: ['a','e','i','o','u']}}, function(err, count){
		console.log("Words with all 5 vowels: "+ count);
	});
	words.count({otherChars: {$exists: true}}, function(err, count){
		console.log("Words with non-alpha characters: "+ count);
	});
	words.count({charsets: {$elemMatch: {$and:[{type:'other'}]}}}, function(err, count){
		console.log("Words with 2 non alpha chars: "+ count);
	});
}