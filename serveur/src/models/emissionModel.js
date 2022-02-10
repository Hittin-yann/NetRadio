// import connection
const db = require("../config/database.js");

//Constructeure
const Emission = function(emission) {
    this.description = emission.fullNameAnimateur;
    this.genre = emission.genre;
};

// Get All Animateurs
Emission.getEmissions = (result) => {
    db.query("SELECT * FROM emission", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
module.exports = Emission;