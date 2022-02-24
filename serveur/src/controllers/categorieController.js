const categorie = require("../models/categorieModel.js");

const showCategories = (req, res) => {
	categorie.getCategories((err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

const createCategorie = (req, res) => {
	const data = req.body;
	categorie.createNewCategorie(data, (err, results) => {
		if (err) {
			res.send(err);
		} else {
			res.json(results);
		}
	});
};

module.exports = { showCategories, createCategorie };
