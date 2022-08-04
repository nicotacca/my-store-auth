

// Aca en index definimos las estrategias que vamos a usar, aca las metemos todas, fb twitter etc..

const passport = require('passport');
const LocalStrategy = require('./strategies/local.strategy');
passport.use(LocalStrategy);