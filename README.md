Simple CRUD app.

Things I am not understanding.

```
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "movies.db"
});
```

On Sequelize and Treehouse they are showing it needs to be this way, however I am finding it really confusing to have two variables with such close names, however when you change it, it seems to break the app.

```
Movie.init(
	{
		title: Sequelize.STRING
	},
	{ sequelize: sequelize }
);
```

-   If the option {sequelize} is not included it breaks the app, or if I change the instance var name to like DB, if I put in

```
Movie.init(
{
	title: Sequelize.STRING
},
{ sequelize: DB }
);
```

this also fails to work.

1. What does this option actually do
2. How could i change the var name so it is not lowercase sequelize?

-   Continuing questions

in db/index.js

```
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
```

-   But wait... MORE QUESTIONS!

*   in ./db/models/movie.js

```
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
```

1. This is the code that teamTreehouse has shown to be what is needed
    - I am not used to this export syntax, - are we declaring the fucntion name to be sequelize and then exporting it? I am unfamiliar with this type of exporting.

-   would it be the same as writting it this way...

    ```
    const Sequelize = require("sequelize");

    const sequelize = () => {
    	class Movie extends Sequelize.Model {}
    	Movie.init(
    		{
    			title: Sequelize.STRING
    		},
    		{ sequelize: sequelize }
    	);
    	return Movie;
    };

    module.exports = sequelize
    ```

-   or am I completely off base?

\_\_ ps I suck at MD, sorry.
