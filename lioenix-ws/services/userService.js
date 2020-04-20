const mongoose = require('mongoose');
const User = require('../models/user');
const messages = require('../config/messages');


/* ===============Login=============== */
const loginUser = (req, res, next) => {
    const userName = req.body.user.userName;
    const password = req.body.user.password;
    console.log(userName, password);
    if (userName != null && password != null){
        User.findOne({'userName': userName})
        .exec().then(
            result => {
                result.comparePassword(password, function(err, isMatch){
                    if (err) throw err;
                    else if (isMatch){
                        let returnObj = {};
                        for (let key in result._doc){
                            if (key === "password") continue;
                            returnObj[key] = result[key];
                        }
                        res.status(200).json({
                            message: messages.GET_COMPLETED,
                            userInfo: returnObj
                        });
                    }else {
                        res.status(400).json({
                            message: messages.PASSWORD_ERROR,
                        });
                    }
                })
            }
        ).catch(err => {
            console.log(err);
            res.status(400).json({
                message: messages.GET_FAILED,
                error: err
            });
        });
    }else{
        res.status(400).json({message: messages.INPUT_ERROR})
    }
};



/* ===============Create=============== */
const createUser = (req, res, next) => {
    const newUser = new User ({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email.toLowerCase(),
        userName: req.body.userName,
        password: req.body.password
    });
    newUser.save().then(
        result => {
            console.log(result);
            res.status(200).json({
                message: messages.SAVE_COMPLETED,
                created: newUser
            });
        }
    ).catch(err => {
        console.log(err);
        res.status(400).json({
            message: messages.SAVE_FAILED,
            error: err
        });
    });
};


/* ===============GetById=============== */
const getUserById = (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
    .exec().then(
        result => {
           if (result != null) {
                console.log(result);
                res.status(200).json({
                    message: messages.GET_COMPLETED,
                    response: result
                });
           }else{
                res.status(404).json({message: messages.CANNOT_FIND_USER})
           }
        }
    ).catch(err => {
        console.log(err);
        res.status(400).json({
            message: messages.GET_FAILED,
            error: err
        });
    });
};

/* ===============Update=============== */
const updateUser = (req, res, next) => {
    const id = req.params.userId;
    User.findById(id).exec().then(
        findResult => {
            if (findResult != null){
                const updateUser = {};
                for (const ops of req.body){
                    if(ops.key === "email"){
                        updateUser["email"] = ops.value.toLowerCase();
                    }else{
                        updateUser[ops.key] = ops.value;
                    }
                }
                User.findByIdAndUpdate(id, {$set: updateUser}).exec().then(
                    result => {
                        console.log(result);
                        res.status(200).json({
                            updated: result,
                            message: messages.UPDATE_COMPLETED
                        })
                    }
                ).catch(err => {
                    console.log(err);
                    res.status(400).json({
                        message: messages.UPDATE_FAILED,
                        error: err
                    });
                });
            }else{
                res.status(404).json({message: messages.CANNOT_FIND_USER})
            }
        }
    ).catch(err => {
        console.log(err);
        res.status(400).json({
            message: messages.GET_FAILED,
            error: err
        })
    });
};


/* ===============Delete=============== */
const deleteUser = (req, res, next) => {
    const id = req.params.userId;
    User.findById(id).exec().then(
        findResult => {
            if (findResult != null){
                User.findByIdAndRemove(id).exec().then(
                    result => {
                        console.log(result);
                        res.status(200).json({message: messages.DELETE_COMPLETED})
                    }
                ).catch(err => {
                    console.log(err);
                    res.status(400).json({
                        message: messages.DELETE_FAILED,
                        error: err
                    });
                });
            }else{
                res.status(404).json({message: messages.CANNOT_FIND_USER})
            }
        }
    ).catch(err => {
        console.log(err);
        res.status(400).json({
            message: messages.GET_FAILED,
            error: err
        })
    });
};

module.exports = {
    loginUser, createUser, getUserById, updateUser, deleteUser
}