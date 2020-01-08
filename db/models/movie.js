const Sequelize = require("sequelize");

module.export = sequelize => {
	class Movie extends Sequelize.Model {}
	Movie.init(
		{
			title: Sequelize.STRING
		},
		{ sequelize: sequelize }
	);
	return Movie;
};
