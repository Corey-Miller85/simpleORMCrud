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
