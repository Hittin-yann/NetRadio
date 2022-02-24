// import connection
const db = require("../config/database.js");

//Constructeure
const Auditeur = function(auditeur) {
    this.fullNameAuditeur = auditeur.fullNameAuditeur;
    this.emailAuditeur = auditeur.emailAuditeur;
    this.mdpAuditeur = auditeur.mdpAuditeur;
};

// Get All auditeurs
Auditeur.getAuditeurs = (result) => {
    db.query("SELECT * FROM auditeur", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get Single auditeur
Auditeur.getAuditeurById = (id, result) => {
    db.query("SELECT * FROM auditeur WHERE idAuditeur = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert auditeur to Database
Auditeur.insertAuditeur = (data, result) => {
    db.query("INSERT INTO auditeur SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update auditeur by id to database
Auditeur.updateAuditeurById = (data, id, result) => {
    db.query("UPDATE auditeur SET fullNameAuditeur = ?, emailAuditeur = ?, mdpAuditeur = ? WHERE idAuditeur = ?", [data.fullNameAuditeur, data.emailAuditeur, data.mdpAuditeur, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete auditeur from database
Auditeur.deleteAuditeurById = (id, result) => {
    db.query("DELETE FROM auditeur WHERE idAuditeur = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Connect as an auditeur
Auditeur.checkCredentials = (email,password, result) => {
    db.query("SELECT * FROM auditeur WHERE emailAuditeur = ? AND mdpAuditeur = ?", [email, password], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}


module.exports = Auditeur;