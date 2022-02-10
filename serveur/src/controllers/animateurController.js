const animateur = require('../models/animateurModel.js');

//Oublis pas de vérifier les codes d'erreurs et les exceptions

// Get All auditeurs
const showAnimateurs = (req, res) => {
    auditeur.getAnimateurs((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single auditeur by id
const showAnimateurById = (req, res) => {
    animateur.getAnimateurById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Create New Auditeur                                                          //S'assurer de mettre le content-type à json/application
const createAnimateur = (req, res) => {
    const data = req.body;
    animateur.insertAnimateur(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update Auditeur
const updateAnimateur = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    animateur.updateAnimateurById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}


// Delete Auditeur
const deleteAnimateur = (req, res) => {
    const id = req.params.id;
    animateur.deleteAnimateurById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

module.exports = { deleteAnimateur, updateAnimateur, createAnimateur, showAnimateurById, showAnimateurs };