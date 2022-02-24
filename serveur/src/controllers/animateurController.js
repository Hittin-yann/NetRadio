const animateur = require("../models/animateurModel.js");

// Oublis pas de vérifier les codes d'erreurs et les exceptions

// Get All auditeurs
const showAnimateurs = (req, res) => {
	animateur.getAnimateurs((err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

// Get Single auditeur by id
const showAnimateurById = (req, res) => {
	animateur.getAnimateurById(req.params.id, (err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

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
};

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
};

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
};

const checkCredentialsAnimateur = (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	var rand = function () {
		return Math.random().toString(36).substr(2); // remove `0.`
	};

	var token = function () {
		return rand() + rand(); // to make it longer
	};

	animateur.checkCredentials(email, password, (err, results) => {
		if (err) {
			console.log("error dans le controller");
			res.send(err);
		} else {
			if (Object.keys(results).length != 0) {
				res.json({
					message: "Connexion réussi",
					token: token(),
					status: "animateur",
					member: true,
				});
			} else {
				res.json({
					message: "Impossible de se connecter",
				});
			}
		}
	});
};

module.exports = {
	deleteAnimateur,
	updateAnimateur,
	createAnimateur,
	showAnimateurById,
	showAnimateurs,
	checkCredentialsAnimateur,
};
