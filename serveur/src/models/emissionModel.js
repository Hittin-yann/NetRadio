// import connection
const db = require("../config/database.js");

//Constructeur
const Emission = function (emission, episode) {
	this.nomEmission = emission.nomEmission;
	this.diffusionDate = emission.diffusionDate;
	this.diffusionTime = emission.diffusionTime;
	this.description = emission.description;
	this.genre = emission.genre;
	this.idAnimateur = emission.idAnimateur;
	this.titleEpisode = episode.titleEpisode;
	this.nbEpisode = episode.nbEpisode;
};

let idEmission = 0;

// Get all emissions with their episodes
Emission.getEmissions = (result) => {
	db.query(
		"SELECT emi.*, ep.* FROM emission emi LEFT JOIN episode ep ON emi.idEmission = ep.emission ORDER BY emi.diffusionTime ASC",
		(err, results) => {
			if (err) {
				console.log(err);
				result(err, null);
			} else {
				result(null, results);
			}
		}
	);
};

// Get an emission with it's episode by id
Emission.getEmissionById = (id, result) => {
	db.query(
		"SELECT * FROM emission emi LEFT JOIN episode ep ON emi.idEmission = ep.emission WHERE emi.idEmission = ?",
		[id],
		(err, results) => {
			if (err) {
				console.log(err);
				result(err, null);
			} else {
				result(null, results[0]);
			}
		}
	);
};

// Insert a new emission and new episode if there's an episode to Database
Emission.insertEmission = (data, result) => {
	db.query(
		"INSERT INTO emission SET nomEmission = ?, diffusionDate = ?, diffusionTime = ?, description = ?, genre = ?, idAnimateur = ?;",
		[
			data.nomEmission,
			data.diffusionDate,
			data.diffusionTime,
			data.description,
			data.genre,
			data.idAnimateur,
		],
		(err, results) => {
			if (err) {
				console.log(err);
				result(err, null);
			} else {
				result(null, results);
			}
		}
	);

	if (data.titleEpisode != null || data.nbEpisode != null) {
		db.query(
			"SELECT idEmission FROM emission ORDER BY idEmission DESC LIMIT 1;",
			(err, results) => {
				if (err) {
					console.log(err);
				} else {
					idEmission = results[0].idEmission;
					db.query(
						"INSERT INTO episode SET emission = ?, titleEpisode = ?, nbEpisode = ?;",
						[idEmission, data.titleEpisode, data.nbEpisode],
						(err, results) => {
							if (err) {
								console.log(err);
							} else {
								console.log(results);
							}
						}
					);
				}
			}
		);
	} else {
	}
};

// Update an emission with it's episode when there's an episode or update an emission and add/create an episode for an emission by id to database
Emission.updateEmissionById = (data, id, result) => {
	let episodeEmission = 0;
	db.query(
		"SELECT emission FROM episode WHERE emission = ?;",
		[id],
		(err, results) => {
			if (err) {
				console.log(err);
			} else {
				episodeEmission = results.length;
				if (episodeEmission == 0) {
					db.query(
						"UPDATE emission SET nomEmission = ?, diffusionDate = ?, diffusionTime = ?, description = ?, genre = ? WHERE idEmission = ?",
						[
							data.nomEmission,
							data.diffusionDate,
							data.diffusionTime,
							data.description,
							data.genre,
							id,
						],
						(err, results) => {
							if (err) {
								console.log(err);
							} else {
								db.query(
									"INSERT INTO episode SET emission = ?, titleEpisode = ?, nbEpisode = ?;",
									[id, data.titleEpisode, data.nbEpisode],
									(err, results) => {
										if (err) {
											console.log(err);
										} else {
											console.log(results);
										}
									}
								);
								result(null, results);
							}
						}
					);
				} else {
					db.query(
						"UPDATE emission SET nomEmission = ?, diffusionDate = ?, diffusionTime = ?, description = ?, genre = ? WHERE idEmission = ?",
						[
							data.nomEmission,
							data.diffusionDate,
							data.diffusionTime,
							data.description,
							data.genre,
							id,
						],
						(err, results) => {
							if (err) {
								console.log(err);
								result(err, null);
							} else {
								result(null, results);
							}
						}
					);

					db.query(
						"UPDATE episode SET titleEpisode = ?, nbEpisode = ? WHERE emission = ?",
						[data.titleEpisode, data.nbEpisode, id],
						(err, results) => {
							if (err) {
								console.log(err);
							} else {
								console.log(results);
							}
						}
					);
				}
			}
		}
	);
};

// Delete an emission with it's episode from database
Emission.deleteEmissionById = (id, result) => {
	db.query(
		"DELETE FROM emission WHERE idEmission = ?",
		[id],
		(err, results) => {
			if (err) {
				console.log(err);
				result(err, null);
			} else {
				result(null, results);
			}
		}
	);

	db.query("DELETE FROM episode WHERE emission = ?", [id], (err, results) => {
		if (err) {
			console.log(err);
		} else {
			console.log(results);
		}
	});
};

Emission.getEmissionByGenre = (genre, result) => {
	db.query(
		"SELECT * FROM emission WHERE Genre = ?",
		[genre],
		(err, results) => {
			if (err) {
				console.log(err);
				result(err, null);
			} else {
				result(null, results);
			}
		}
	);
};

module.exports = Emission;
