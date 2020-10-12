var express = require('express');
var router = express.Router();
var categoriesController = require("../controllers/categoriesController.js")

/* GET listing. */
router.get('/', categoriesController.getAll);

/* POST listing. */
router.post('/', categoriesController.create);

/* Exports */
module.exports = router;
