let mongoose = require('mongoose');

let encounterSchema = mongoose.Schema({
  name: String,
  combatants: [String]
}, { collection: 'encounters' });

let Encounter = mongoose.model('Encounter', encounterSchema);
module.exports = Encounter;
