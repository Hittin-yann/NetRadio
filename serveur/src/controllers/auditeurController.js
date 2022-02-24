const auditeur = require('../models/auditeurModel.js');

//Oublis pas de vérifier les codes d'erreurs et les exceptions

// Get All auditeurs
const showAuditeurs = (req, res) => {
    auditeur.getAuditeurs((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single auditeur by id
const showAuditeurById = (req, res) => {
    auditeur.getAuditeurById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Create New Auditeur        // S'assurer de mettre le content-type à json/application
const createAuditeur = (req, res) => {
    const data = req.body;
    auditeur.insertAuditeur(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update Auditeur
const updateAuditeur = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    auditeur.updateAuditeurById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}


// Delete Auditeur
const deleteAuditeur = (req, res) => {
    const id = req.params.id;
    auditeur.deleteAuditeurById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Connexion Auditeur
const checkCredentialsAuditeur = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    var rand = function() {
        return Math.random().toString(36).substr(2); // remove `0.`
    };
    
    var token = function() {
        return rand() + rand(); // to make it longer
    };
    

    auditeur.checkCredentials(email, password,(err,results)=>{
        if (err) {
            console.log('error dans le controller');
            res.send(err);
        } else {
            if (Object.keys(results).length != 0) {
                res.json({
                    "message" : "Connexion réussi",
                    "token" : token(),
                    "status" : "auditeur",
                    "member" : true
                });
            } else {
                res.json({
                    "message" : "Impossible de se connecter"
                });
            }
            
        }
    });
}

module.exports = { deleteAuditeur, updateAuditeur, createAuditeur, showAuditeurById, showAuditeurs, checkCredentialsAuditeur };