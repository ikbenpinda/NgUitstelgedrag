# Uitstelgedrag

A todo-app made with Angular, Express, MongoDB and Node for educational purposes. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

_Note: this is an example implementation of the MEAN-stack without the overhead of cloning the official repository. Some files may be missing when compared._


# Setup and installation  

This project uses Angular, Express, Node, MongoDB, so make sure those are up and running.
Additionally, Nodemon is used to reflect changes in code on file change. 

To get started, run: 

```
git clone https://github.com/ikbenpinda/NgUitstelgedrag.git
npm install
nodemon ./express/server.js
ng serve --open

```

The backend will be available on localhost:3000, the frontend on localhost:4200.

### MongoDB
MongoDB is used together with the [Mongoose](http://mongoosejs.com/) ORM. To get a better understanding of Mongoose, you're probably better off skipping the manual for now and starting with [the GitHub page](https://github.com/Automattic/mongoose). 

### Modules
Modules have been used to split up the server.js file. Information about working with modules can be found [here](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc), [here](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/), and [here](https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8)

---

Etienne, 2018.
