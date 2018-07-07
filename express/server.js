//important - rather than using ng serve this needs to be used to actually run your backend.

// FIXME - move to config/external file
const SERVER_PORT = 3000;
const DATABASE_CONNECTION_URL = 'mongodb://localhost/nguitstelgedragdb';

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
mongoose.connect(DATABASE_CONNECTION_URL);

app.get('/', (req, res) => res.send('You came to the wrong backend, motherfucker.'));

app.listen(SERVER_PORT, () => console.log('NgUitstelgedrag listening on port '+ SERVER_PORT + '!'));
