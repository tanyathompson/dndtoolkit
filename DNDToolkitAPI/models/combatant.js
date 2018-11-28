let mongoose = require('mongoose');

let combatantSchema = mongoose.Schema({
  name: String,
  owner: String,
  hp: Number,
  initiative: Number
}, { collection: 'combatants' });

let Combatant = mongoose.model('Combatant', combatantSchema);
module.exports = Combatant;
