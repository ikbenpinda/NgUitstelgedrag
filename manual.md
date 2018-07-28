# Users' Manual

### an educational guide to the mess that is this project

The intention of this project is to give a reference project of how a basic MEAN-stack project works while keeping it simple as much as possible.
An attempt was made to make it as realistic possible, meaning inclusion of software architecture, automated tests, and advanced functionality.

The following project is a simple todo app which includes everything you need for most real-life projects, such as:
- Networking
- Persisting data
- Authenticating users
- Software architecture
- Automated tests

---

# Recommended setup

(...)install hyper(optional), git-bash, node, nodemon, mongodb, and angular CLI.

git clone this repository

(...)Run ```mongod```, ```nodemon server.js```, and ```ng serve```

# ARCHITECTURE - THE BASICS

The project contains of three layers:
1. the frontend
2. the backend 
3. the database

## THE FRONTEND

This is done with the [Angular 2](angular.io) framework.
Angular is a frontend framework responsible for retrieving and displaying the data from the backend.

## THE BACKEND

The backend runs on [Node](https://nodejs.org/en/about/), in combination with the [Express.js](https://expressjs.com/) framework. 
Express is a backend framework that makes working with Node easier.

This way, the frontend and backend are nicely seperated. 
The two sides communicate with each other using the REST API implemented on the backend, or over sockets when real-time communication is needed.

## THE DATABASE

MongoDB is used as the database implementation.
Usually a database means a shitload of SQL and queries and having fun with unsanitized input and dropped tables.
MongoDB is a NoSQL database, so that means no more SQL, but also a very different way of thinking about databases.

# ARCHITECTURE - INSIDE THE APP

## COMMUNICATING WITH THE USER


## COMMUNICATING WITH THE BACKEND

To communicate with the backend, HTTP calls are made to the REST API of the backend.

The REST API is best imagined as merely a menu of what's available to the frontend.



## COMMUNICATING WITH THE DATABASE

Communicating with the database is done using Mongoose as an ORM.
Basically, Mongoose makes sure all the details about what the models in the database look like are appropriately made.
It also makes communicating changes to your data easier.

Because this happens on the backend, Mongoose is called using Express. 

[insert code snippet of server js here]

[explanation of how this is used]

[insert code snippet of database calls here]

[explanation of how this works]


### Modularizing

Express uses one file in the documentation, typically called app.js or server.js. 
This is optional though. One way to make code more modular is to use the module pattern. 
this way, code can be split up across different files to keep things organized.

a typical module looks like this:

```js

// somestuffformydatabase.js
module.exports = {

	someStuffForMyDatabase: function(){

		getStuffFromDatabase(){
			// ...
		}

		dropAllTables(){
			// ...
		}
	}
};

//app.js
ssfmd = require('./somestuffformydatabase.js');
ssfmd.getStuffFromDatabase();

```

[constructors, fields, methods, arbitrary setup details]

### Modularizing - example

```js

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const taskRouter = express.Router();



const Schema = mongoose.Schema; //fixme

const TaskSchema = new Schema({
  title: String,
  isCompleted: Boolean,
});

const TaskModel = mongoose.model('Task', TaskSchema);
const Task = new TaskModel();

TaskModel.deleteMany({}, function (err) { if(!err)console.log('Cleared database.')});

let task1 = new TaskModel();
task1.title = 'Developer - In Pure Form 18';
let task2 = new TaskModel();
task2.title = 'Electric Rescue - Texture Shot';
let task3 = new TaskModel();
task3.title = 'Charlotte De Witte - Motion';
let task4 = new TaskModel();
task4.title = 'Oscar Mulero - Triad';
let task5 = new TaskModel();
task5.title = 'Dax J - Distant Futures';

let errorHandler = function(err){
  if (!err)
    console.log('Task saved successfully!');
  else
    console.error(err.message);
};
task1.save( (err) => errorHandler(err) );
task2.save( (err) => errorHandler(err) );
task3.save( (err) => errorHandler(err) );
task4.save( (err) => errorHandler(err) );
task5.save( (err) => errorHandler(err) );

TaskModel.find({}, function (err, docs) {
  if(err)
    console.error(err.message);
  else
    console.log('Found ' + docs.length + ' results.');
});

taskRouter.get('/', (request, response) => {
  TaskModel.find({}, function (err, results) {
    if(err) {
      console.error(err.message);
      response.send(err.message);
    }
    else {
      console.log('Found ' + results.length + ' results.');
      response.send(results);
    }
  });
});

app.use('/tasks', taskRouter);

mongoose.connect('mongodb://localhost/nguitstelgedragdb');

app.get('/', (req, res) => res.send('You came to the wrong backend, motherfucker.'));

app.listen(3000, () => console.log('NgUitstelgedrag listening on port 3000!'));


```

This code is the entire server in one file. However it does multiple things:
- Routing
- Database calls
- database schemas
- Inserting mock data

Apart from that there is some stuff that is hard to change since it is all over the place, like:
- Hardcoded configuration variables
- The server.js file is found inbetween all the Angular 2 files.

So let's split it up where each of these concerns gets their own space:
- REST API
- Database stuff
- Test/mock data
- Backend vs frontend files

### OpenSSL
_The estimate i took was calculated, but god am i bad at math._

A key and certificate have been generated using openSSL, with the following commands:

