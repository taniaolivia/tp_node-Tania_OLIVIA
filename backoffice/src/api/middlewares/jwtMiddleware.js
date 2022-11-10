const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_KEY;

exports.authenticateUser = (req, res, next) => {
    let token = req.headers['authorization'];

    if(token !== undefined){
        jwt.verify(token, jwtKey, (error, user) => {
            if(error){
                res.status(403);
                res.json({message: "Accès interdit : token invalide"})
            }
            else{
                if((!user.admin || user.admin) && user.connected){
                    next();
                }
                else{
                    res.status(403);
                    res.json({message: "Accès interdit : accès limité à l'utilisateur connecté"})
                }
            }
        })
    }
    else{
        res.status(403);
        res.json({message: "Accès interdit : token manquant"});
    }
}

exports.authenticateAdmin = (req, res, next) => {
    let token = req.headers['authorization'];

    if(token !== undefined){
        jwt.verify(token, jwtKey, (error, user) => {
            if(error){
                res.status(403);
                res.json({message: "Accès interdit : token invalide"})
            }
            else{
                if(user.admin && user.connected){
                    next();
                }
                else{
                    res.status(403);
                    res.json({message: "Accès interdit : accès limité à l'admin"})
                }
            }
        })
    }
    else{
        res.status(403);
        res.json({message: "Accès interdit : token manquant"});
    }
}