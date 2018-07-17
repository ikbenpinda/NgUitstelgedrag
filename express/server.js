//important - rather than using ng serve this needs to be used to actually run your backend.

require('dotenv').config({path: './express/environments/.env'});

// For debug-purposes; To print the environment variables, uncomment the below instead:
// const dotenv = require('dotenv');
// let result =  dotenv.config({path: './express/environments/.env'}); // Loads the environment variables into Node.process.env.
// if (result.error)
//   throw result.error;
// console.info(`Starting server with the following variables:\n${JSON.stringify(result.parsed, null, 2)}`);
const fs = require('fs');
const https = require('https');
const options = {
  key: fs.readFileSync(process.env.SSL_KEY_PATH),
  cert: fs.readFileSync(process.env.SSL_CERTIFICATE_PATH),
  passphrase: process.env.SSL_PASSPHRASE
};
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// express.Router can be re-used for additional routers.
const taskRouter = require('./api/routers/taskrouter');

// To keep things simple, the schema for tasks has been put in a seperate file.
// require() returns an object;
// This means we can call the TaskSchema function in taskschema.js right away.
const Tasks = require('./database/schemas/tasks');

const taskMockData = require('./api/mockdata');
taskMockData.insertMockData();

app.use(bodyParser.json()); // parses application/json data in HTTP requests.
app.use(bodyParser.urlencoded({ extended: true })); // parses application/x-www-form-urlencoded data in HTTP requests.

// A router is practically a mini-app in itself,
// so don't forget to wire it up with your app using app.use.
// app.use('/route', router);
app.use('/tasks', taskRouter);

// Connect to the mongoDB.
mongoose.connect(process.env.DATABASE_CONNECTION_URL);

app.get('/', (req, res) => { // Shows the Express home page. In this case there isn't any.
  res.status(418).sendFile('./nope.jpg',{root: './express'});
});

// app.listen(process.env.SERVER_PORT, () => console.log('NgUitstelgedrag listening on port '+ process.env.SERVER_PORT + '!'));
https
  .createServer(options, app)
  .listen(process.env.SERVER_PORT, () => console.log('NgUitstelgedrag listening on port '+ process.env.SERVER_PORT + '!'));
