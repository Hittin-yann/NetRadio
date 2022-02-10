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

// Create New Auditeur                                                          //S'assurer de mettre le content-type à json/application
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

module.exports = { deleteAuditeur, updateAuditeur, createAuditeur, showAuditeurById, showAuditeurs };