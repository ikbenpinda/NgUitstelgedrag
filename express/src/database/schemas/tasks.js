const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * The database definition for a Task.
 */
const schema = new Schema({
  title: String,
  isCompleted: Boolean,
});

/**
 * Responsible for imlementing the schema in MongoDB.
 * Access point for querying this collection.
 * @type {Model} An interesting abstraction in Mongoose...
 */
const model = mongoose.model('Task', schema);

// todo - explain modules and the difference in notation with the other files.
module.exports.schema = schema;
module.exports.model = model;
