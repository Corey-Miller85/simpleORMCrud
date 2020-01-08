const Sequelize = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "movies.db",
	logging: false
});

const db = {
	sequelize,
	Sequelize,
	models: {}
};
// so this is saying that db is an object, with the sequelize instance, then the ORM?(Why is this there?), and then
db.models.Movie = require("./models/movie.js")(sequelize); // this loads the models that are in ./models/movies.js? What is with the (sequelize) at the end?
// all of these sequelize keywords being thrown around are comopletely confusing me.
module.exports = db;
