var express = require('express');
var router = express.Router();
var userAdminController = require("../controllers/usersAdminController");

/* GET listing. */
router.get('/id', usersAdminController.getById);

/* POST listing. */
router.post('/registro', usersAdminController.create);
router.post('/login', usersAdminController.validate);

/* PUT listing. */
router.put('/user/activate/:hash', usersAdminController.put);

/* DELETE listing. */
router.delete('/control', usersAdminController.delete);

/* Exports */
module.exports = router;
