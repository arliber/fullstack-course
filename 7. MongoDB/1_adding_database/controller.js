var mongodb = require('mongodb').MongoClient; //Load the mongoDB client

var connectionUrl = 'mongodb://localhost:27017/cv'; //Define connection string

function getUserByName(userName, res) {

  mongodb.connect(connectionUrl, function (err, db) { //Callback function - when connection established
      var collection = db.collection('users');
      collection.findOne({
              'basicInfo.firstName': userName
          },
          function (err, result) { //Callback function - when result arrives
              if(err) { //Check for error
                console.error('Error: Unable to get data for user "'+userName+'" with error: ', err); //Log to console`
                res.status(500).send('Error: Unable to get data for user "'+userName+'" with error: '); //Send to browser
              } else { //All good, continue
                res.status(200).json(result)
              }
          }
      );
  });

}

module.exports.getUserByName = getUserByName; //Make the 'getUserByName' function available from outside

function getAllUserNames(res) {

  mongodb.connect(connectionUrl, function (err, db) { //Callback function - when connection established
      var collection = db.collection('users');
      collection.find({}, { "basicInfo.firstName": 1, _id:0})
                //SELECT firstName FROM USERS
                .toArray(function (err, result) { //Callback function - when result arrives
                      if(err) { //Check for error
                        console.error('Error: Unable to get data for user "'+userName+'" with error: ', err); //Log to console`
                        res.status(500).send('Error: Unable to get data for user "'+userName+'" with error: '); //Send to browser
                      } else { //All good, continue
                        res.status(200).json(result)
                      }
                  });
  });

}

module.exports.getAllUserNames = getAllUserNames; //Make the 'getAllUserNames' function available from outside
