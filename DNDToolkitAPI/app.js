// let createError = require('http-errors');
let express = require('express');
// let path = require('path');
// let cookieParser = require('cookie-parser');
// let logger = require('morgan');

let cors = require('cors');
let mongoose = require('mongoose');

let CombatantModel = require('./models/combatant.js');
let EncounterModel = require('./models/encounter.js');

let dbConfig = require('./configs/db.js');

let util = require('util');

// let indexRouter = require('./routes/index');
// let usersRouter = require('./routes/users');

let app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

mongoose.connect(dbConfig.dbConnectionString);

app.delete('/delete/encounter/:id', (req, res) => {
  console.log('Delete Encounter Request: ' + req.params.id);
  EncounterModel.findOneAndDelete({_id: req.params.id}, (err, encounter) => {
    console.log('err: ' + err);
    console.log('encounter: ' + encounter)
    if (err) { res.json(err) }
    res.json(encounter)
    console.log('deleted id: ' + req.params.id)
  });
});

app.put('/update/encounter/:id', (req, res) => {
  console.log('Update Encounter Request: ' + req.params.id);
  console.log('Update Encounter Body: ' + req.body)
  EncounterModel.findOneAndUpdate({_id: req.params.id}, {
    name: req.body.name,
    combatants: req.body.combatants
  }, (err, oldEncounter) => {
    console.log('err: ' + err);
    console.log('encounter: ' + oldEncounter)
    if (err) { res.json(err) }
    res.json(oldEncounter)
    console.log('updated id: ' + req.params.id)
  });
});

app.delete('/delete/combatant/:id', (req, res) => {
  console.log('Delete Combatant Request: ' + req.params.id);
  CombatantModel.findOneAndDelete({_id: req.params.id}, (err, combatant) => {
    console.log('err: ' + err);
    console.log('combatant: ' + combatant)
    if (err) { res.json(err) }
    res.json(combatant)
    console.log('deleted id: ' + req.params.id)
  });
});

app.put('/update/combatant/:id', (req, res) => {
  console.log('Update Combatant Request: ' + req.params.id);
  console.log('Update Combatant Body: ' + req.body)
  CombatantModel.findOneAndUpdate({_id: req.params.id}, {
    name: req.body.name,
    owner: req.body.owner,
    hp: req.body.hp,
    initiative: req.body.initiative
  }, (err, oldCombatant) => {
    console.log('err: ' + err);
    console.log('combatant: ' + oldCombatant)
    if (err) { res.json(err) }
    res.json(oldCombatant)
    console.log('updated id: ' + req.params.id)
  });
});

app.post('/new/combatant', (req, res, next) => {
  console.log('New Combatant Request: ' + req.body.name);
  let newCombatant = new CombatantModel({
    name: req.body.name,
    owner: req.body.owner,
    hp: req.body.hp,
    initiative: req.body.initiative
  });

  newCombatant.save((err, result) => {
    if (err) { console.log(err) }
    else { res.json(result) }
  });
});

app.post('/new/encounter', (req, res, next) => {
  console.log('New Encounter Request: ' + req.body.name);
  let newEncounter = new EncounterModel({
    name: req.body.name,
    combatants: req.body.combatants
  });

  newEncounter.save((err, result) => {
    if (err) { console.log(err) }
    else { res.json(result) }
  });
});

app.get('/list/combatants', (req, res, next) => {
  CombatantModel.find((err, result) => {
    if (err) { console.log(err) }
    else { res.json(result) }
  });
});

app.get('/list/encounters', (req, res, next) => {
  EncounterModel.find((err, result) => {
    if (err) { console.log(err) }
    else { res.json(result) }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
