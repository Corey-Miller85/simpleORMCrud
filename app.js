const Sequelize = require("sequelize");
// this creates an instance of sequelize ORM. Database and This are not one in the same. if I rename it to something less similar to const before it screws up the option in the init call of Movie.
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "movies.db",
	logging: false
});

class Movie extends Sequelize.Model {} // Why the "{}" at the end with nothing in it? Not a huge deal but confuses me.
Movie.init(
	{
		title: Sequelize.STRING
	},
	// I understand this is an option, however I am completely lost as to what it does.
	{ sequelize: sequelize }
);

(async () => {
	await sequelize.sync({ force: true });
	try {
		const allMovies = await Promise.all([
			Movie.create({
				title: "Toy Story"
			}),
			Movie.create({
				title: "The Incredibles"
			})
		]);
		const moviesJSON = allMovies.map(movie => movie.toJSON());
		console.log(moviesJSON);
	} catch (error) {
		console.log("there was an error", error);
	}
})();
