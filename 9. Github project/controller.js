var mongodb = require('mongodb').MongoClient; //Load the mongoDB client

var connectionUrl = 'mongodb://localhost:27017/cv'; //Define connection string

function getUserByName(userName, res) {

  mongodb.connect(connectionUrl, function (err, db) { //Callback function - when connection established
      var collection = db.collection('users'); //Select the users collection
      collection.findOne({ //findOne - find only a single document
              'basicInfo.firstName': userName  //Find a user where basicInfo.firstName is equal to userName
          },
          function (err, result) { //Callback function - when result arrives
              if(err) { //Check for error
                console.error('Error: Unable to get data for user "'+userName+'" with error: ', err); //Log to console`
                res.status(500).send('Error: Unable to get data for user "'+userName+'" with error: '); //Send to browser
              } else { //All good, continue
                res.status(200).json(result);
              }
          }
      );
  });

}

module.exports.getUserByName = getUserByName; //Make the 'getUserByName' function available from outside

function getAllUserNames(res) {

  mongodb.connect(connectionUrl, function (err, db) { //Callback function - when connection established
      var collection = db.collection('users'); //Select the users collection
      collection.find({}, 
                { 
                    "basicInfo.firstName": 1, //Return firstName field
                    "_id": 0 //Don't return _id field
                })
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

function saveOrUpdateUser(body, res) {

    var userName = body.basicInfo.firstName;
    console.log('Adding/Updateing user "'+userName+'"');

    mongodb.connect(connectionUrl, function (err, db) { //Callback function - when connection established
        var collection = db.collection('users'); //Select the users collection
        var updateResult = collection.update({ //Like WHERE in SQL
                'basicInfo.firstName': userName //Update a user who has basicInfo.firstName = userName variable
            },
            body, //The whole form 
            {
              upsert: true //Create of document does not exist, update if document does exist
            }
        );

        res.json(updateResult);

    });


}

module.exports.saveOrUpdateUser = saveOrUpdateUser; //Make the 'saveOrUpdateUser' function available from outside
