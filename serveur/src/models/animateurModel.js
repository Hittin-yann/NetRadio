// import connection
const db = require("../config/database.js");

//Constructeure
const Animateur = function(animateur) {
    this.fullNameAnimateur = animateur.fullNameAnimateur;
    this.emailAnimateur = animateur.emailAnimateur;
    this.mdpAnimateur = animateur.mdpAnimateur;
};

// Get All Animateurs
Animateur.getAnimateurs = (result) => {
    db.query("SELECT * FROM animateur", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get Single Animateur
Animateur.getAnimateurById = (id, result) => {
    db.query("SELECT * FROM animateur WHERE idAnimateur = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert Animateur to Database
Animateur.insertAnimateur = (data, result) => {
    db.query("INSERT INTO animateur SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Animateur by id to database
Animateur.updateAnimateurById = (data, id, result) => {
    db.query("UPDATE animateur SET fullNameAnimateur = ?, emailAnimateur = ?, mdpAnimateur = ? WHERE idAnimateur = ?", [data.fullNameAnimateur, data.emailAnimateur, data.mdpAnimateur, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete Animateur from database
Animateur.deleteAnimateurById = (id, result) => {
    db.query("DELETE FROM animateur WHERE idAnimateur = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// connexion animateur
Animateur.checkCredentials = (email, password, result) =>{
    db.query("SELECT * FROM animateur WHERE emailAnimateur = ? AND mdpAnimateur = ?",[email, password],(err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}


module.exports = Animateur;