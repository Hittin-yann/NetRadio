const emission = require('../models/emissionModel');

//Oublis pas de vérifier les codes d'erreurs et les exceptions

// Get All auditeurs
const showEmissions = (req, res) => {
    emission.getEmissions((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

module.exports = { showEmissions };