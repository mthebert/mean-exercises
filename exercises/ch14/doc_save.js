var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err,db){
	var myDB = db.db("astro");
	myDB.collection("nebulae", function(err, nebulae){
		nebulae.findOne({type: "Super Nova"}, function(err, item){
			console.log("Before Save: ");
			console.log(item);
			item.info = "Some New Info";
			nebulae.save(item, {w:1}, function(err, results){
				nebulae.findOne({_id:item._id}, function(err, savedItem){
					console.log("after save: ");
					console.log(savedItem);
					db.close();
				});
			});
		});
	});
});
