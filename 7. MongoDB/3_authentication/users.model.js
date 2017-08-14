var mongodb = require('mongodb').MongoClient; //Load the mongoDB client
var crypto = require('crypto');

var connectionUrl = 'mongodb://localhost:27017/cv'; //Define connection string

function getUserByEmail(email, callback) {
  console.log('getUserByEmail: Getting user with email ['+email+']')

  mongodb.connect(connectionUrl, function (err, db) { 
    var collection = db.collection('users'); 
    collection.findOne({ 'email': email }, callback);
  });
}

module.exports.getUserByEmail = getUserByEmail;

function createNewUser(email, password, callback) {
  console.log('createNewUser: Creating user with email ['+email+']')

  mongodb.connect(connectionUrl, function (err, db) { 
    var collection = db.collection('users'); 
    collection.insert({
        email: email,
        password: crypto.createHash('sha256').update(password).digest('base64')
      }, callback);
  });

}

module.exports.createNewUser = createNewUser;
