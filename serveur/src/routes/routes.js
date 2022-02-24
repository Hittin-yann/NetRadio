module.exports = (app) => {
	let router = require("express").Router();
	app.use("/", router);

	const auditeur = require("../controllers/auditeurController");
	const animateur = require("../controllers/animateurController");
	const categorie = require("../controllers/categorieController");
	const emission = require("../controllers/emissionController");

	/**
	 * Routes des auditeurs
	 */
	//get tous les auditeurs
	router.get("/auditeurs", auditeur.showAuditeurs);

	// get un seul utilisateur par id
	router.get("/auditeurs/:id", auditeur.showAuditeurById);

	// Créer nouveau auditeur
	router.post("/auditeurs", auditeur.createAuditeur);

	// update un auditeur
	router.put("/auditeurs/:id", auditeur.updateAuditeur);

	// delete un auditeur
	router.delete("/auditeurs/:id", auditeur.deleteAuditeur);

	/**
	 * Routes des Animateurs
	 */
	//get tous les animateurs
	router.get("/animateurs", animateur.showAnimateurs);

	// get un seul animateur par id
	router.get("/animateurs/:id", animateur.showAnimateurById);

	// Créer nouveau animateur
	router.post("/animateurs", animateur.createAnimateur);

	// update un animateur
	router.put("/animateurs/:id", animateur.updateAnimateur);

	// delete un animateur
	router.delete("/animateurs/:id", animateur.deleteAnimateur);

	// CONNEXION
	// Auditeur connexion
	router.post("/connexionAuditeur", auditeur.checkCredentialsAuditeur);

	// Animateur connexion
	router.post("/connexionAnimateur", animateur.checkCredentialsAnimateur);

	// CATEGORIES
	// get les categories
	router.get("/categories", categorie.showCategories);

	// create a categorie
	router.post("/createCategorie", categorie.createCategorie);

	//EMISSION by genre
	router.get("/emission/:genre", emission.getEmissionByCategorie);
};
