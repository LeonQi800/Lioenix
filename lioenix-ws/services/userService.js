const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');
const messages = require('../config/messages');


/* ===============Login=============== */
const loginUser = (req, res, next) => {
    if(!req.body.user.email){
        return res.status(400).json({errors: {email: messages.CANNOT_BLANK}});
    }

    if(!req.body.user.password){
    return res.status(400).json({errors: {password: messages.CANNOT_BLANK}});
    }

    passport.authenticate('local', {session: false}, function(err, user, info){
        if(err){ return next(err); }

        if(user){
            user.token = user.generateJWT();
            return res.status(200).json({
                user: user.toAuthJSON(),
                message: messages.GET_COMPLETED
            });
        } else {
            return res.status(404).json(info);
        }
    })(req, res, next);
};


/* ===============Create=============== */
const createUser = (req, res, next) => {
    var user = new User();
    user.username = req.body.user.username;
    user.email = req.body.user.email;
    user.setPassword(req.body.user.password);

    // User.findOne({$or:[{username:  user.username}, {email: user.email}]})
    
    user.save().then(function(){
      return res.json({user: user.toAuthJSON()});
    }).catch(next);
};


/* ===============CheckEmail=============== */
const checkEmail = (req, res, next) => {
  if (req.body.user && req.body.user.email){
    User.findOne({email: req.body.user.email}).then(function(user){
      if(!user){ return res.sendStatus(401); }
  
      return res.json({user: user.toAuthJSON()});
    }).catch(next);
  }else return res.sendStatus(401)
};

/* ===============Update=============== */
const updateUser = (req, res, next) => {
    User.findById(req.payload.id).then(function(user){
        if(!user){ return res.sendStatus(401); 
        }
        // only update fields that were actually passed...
        if(typeof req.body.user.username !== 'undefined'){
          user.username = req.body.user.username;
        }
        if(typeof req.body.user.email !== 'undefined'){
          user.email = req.body.user.email;
        }
        if(typeof req.body.user.bio !== 'undefined'){
          user.bio = req.body.user.bio;
        }
        if(typeof req.body.user.image !== 'undefined'){
          user.image = req.body.user.image;
        }
        if(typeof req.body.user.password !== 'undefined'){
          user.setPassword(req.body.user.password);
        }
    
        return user.save().then(function(){
          return res.json({user: user.toAuthJSON()});
        });
      }).catch(next);
};


/* ===============Delete=============== */
const deleteUser = (req, res, next) => {
    // const id = req.params.userId;
    // User.findById(id).exec().then(
    //     findResult => {
    //         if (findResult != null){
    //             User.findByIdAndRemove(id).exec().then(
    //                 result => {
    //                     console.log(result);
    //                     res.status(200).json({message: messages.DELETE_COMPLETED})
    //                 }
    //             ).catch(err => {
    //                 console.log(err);
    //                 res.status(400).json({
    //                     message: messages.DELETE_FAILED,
    //                     error: err
    //                 });
    //             });
    //         }else{
    //             res.status(404).json({message: messages.CANNOT_FIND_USER})
    //         }
    //     }
    // ).catch(err => {
    //     console.log(err);
    //     res.status(400).json({
    //         message: messages.GET_FAILED,
    //         error: err
    //     })
    // });
};

module.exports = {
    loginUser, createUser, checkEmail, updateUser, deleteUser
}