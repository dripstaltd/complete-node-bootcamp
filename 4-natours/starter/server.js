const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

/* Mongoose allows for rapid and simple development of mongoDB database interactions.

 FEATURES:
1) schemas to model data and relationships
2) easy data validation
3) simple query API support
4) middleware support

Mongoose schema: where we model our data, by describing the structure of the data, default values and validation

Mongoose model: a wrapper for the schema, providing an interface to the database for CRUD operations

*/
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection established'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
