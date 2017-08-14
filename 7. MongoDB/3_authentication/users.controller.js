const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const users = require('./users.model');

function _extractuserData(body) {
  if (!body.password || !body.email) {
    return false;
  } else {
    return {
      email: body.email,
      password: body.password,
    };
  }
}

function _getUserPayload(user) {
  return {
    email: user.email,
  };
}

function _getUser(userData) {
  return {
    token: jwt.sign(_getUserPayload(userData), 'myTopSecret', { expiresIn: '14d' })
  };
}

function signup(req, res, next) {

  var userForm = _extractuserData(req.body);

  if (!userForm) {
    res.status(400).json({ error: 'missing email or password fields' });
    next();
  } else {
    users.getUserByEmail(userForm.email, function(err, user) {
      if(err) { // Error
        res.status(500).json({ error: 'unable to search for user' });
        next();
      } else if (user) { // User exists
        res.status(400).json({ error: 'user already exists' });
        next();
      } else { // Create new user
        users.createNewUser(userForm.email, userForm.password, function(err, newUser) {
          if (err) {
            res.status(500).json({ error: 'unable to save new user' });
          } else {
            res.status(200).json(newUser);
          }
          next();
        });
      }
    });
  }
}

function signin(req, res, next) {
  var userForm = _extractuserData(req.body);

  if (!userForm) {
    res.status(400).json({ error: 'missing email or password fields' });
    next();
  } else {
    users.getUserByEmail(userForm.email, function(err, user) {
      if (err) { // Error
        res.status(500).json({ error: 'unable to search for user' });
      } else if (!user) { // User exists
        res.status(400).json({ error: 'user does not exist' });
      } else {
        if (user.password === crypto.createHash('sha256').update(userForm.password).digest('base64')) {
          res.status(200).json(_getUser(user));
        } else {
          res.status(401).json({ error: 'unauthorized' });
        }
      }
      next();
    })
  }
}

module.exports = {
  signup,
  signin,
};
