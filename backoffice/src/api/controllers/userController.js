const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Inscription d'utilisateur
exports.userRegister = (req, res) => {
    let newUser = new User(req.body);

    if(newUser.password){
        bcrypt.hash(newUser.password, 10, (error, hash) => {
            if(error){
                res.status(401);
                console.log(error);
                res.json({message: "Impossible de crypter le mot de passe"});
            }
            else{
                newUser.password = hash;

                newUser.save((error, user) => {
                    if(error){
                        res.status(401);
                        console.log(error);
                        res.json({message: "Rêquete invalide"});
                    }
                    else{
                        res.status(200);
                        res.json({message: `Utilisateur crée : ${user.email}`});
                    }
                });
            }
        })
    }
    else{
        res.status(401);
        console.log(error);
        res.json({message: "Mot de passe est vide"});
    }
}

// Connexion d'utilisateur
exports.userLogin = (req, res) => {
    User.findOne({email: req.body.email}, (error, user) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Utilisateur non trouvé"});
        }
        else{
            if(user.email == req.body.email){
                bcrypt.compare(req.body.password, user.password, (error, result) => {
                    if(error){
                        res.status(401);
                        console.log(error);
                        res.json({message: "Mot de passe incorrect"})
                    }
                    else{
                        if(!user.connected){
                           user.connected = 1;

                           user.save((error, user) => {
                                if(error){
                                    res.status(401);
                                    console.log(error);
                                    res.json({message: "Rêquete invalide"});
                                }
                                else{
                                    let userData = {
                                        id: user._id.toString(),
                                        email: user.email,
                                        admin: user.admin,
                                        connected: 1
                                    }
                
                                    jwt.sign(userData, process.env.JWT_KEY, {expiresIn: "30 days"}, (error, token) => {
                                        if(error){
                                            res.status(500);
                                            console.log(error);
                                            res.json({message: "Impossible de générer le token"})
                                        }
                                        else{
                                            res.status(200);
                                            res.json({message: `Utilisateur connecté : ${user.email}`, token, user: userData});
                                        }
                                    });
                                }
                            });
                        }
                        else{
                            res.status(401);
                            console.log(error);
                            res.json({message: "Utilisateur est déjà connecté"});
                        }
                    }
                })
            }
            else{
                res.status(401);
                console.log(error);
                res.json({message: "Email ou mot de passe incorrect"})
            }
        }
    })
}

// Déconnexion d'utilisateur
exports.userLogout = (req, res, error) => {
    if(req.params.userId){
        User.findById(req.params.userId, (error, user) => {
            if(error){
                res.status(401);
                console.log(error);
                res.json({message: "Utilisateur connecté non trouvé"});
            }
            else{
                if(user.connected){
                    user.connected = 0;

                    user.save((error, user) => {
                        if(error){
                            res.status(401);
                            console.log(error);
                            res.json({message: "Rêquete invalide"});
                        }
                        else{
                            res.status(200);
                            res.json({message: `Utilisateur déconnecté : ${user.email}`});
                        }
                    });
                }
                else {
                    res.status(401);
                    console.log(error);
                    res.json({message: 'Utilisateur connecté non trouvé'});
                }
            }
        })
    }
    else {
        res.status(401);
        console.log(error);
        res.json({message: 'Utilisateur connecté non trouvé'});
    }
}