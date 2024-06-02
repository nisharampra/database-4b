// main.js
const { check, validationResult } = require('express-validator');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('SampleForm');
  });

  app.post('/saveData', [
    check('email', 'Email length should be 10 to 30 characters').isEmail().isLength({ min: 10, max: 30 }),
    check('name', 'Name length should be 10 to 20 characters').isLength({ min: 10, max: 20 }),
    check('mobile', 'Mobile number should contain 10 digits').isLength({ min: 10, max: 10 }),
    check('password', 'Password length should be 8 to 10 characters').isLength({ min: 8, max: 10 })
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      res.send('Successfully validated');
    }
  });
};
