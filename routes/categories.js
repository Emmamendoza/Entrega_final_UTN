var express = require('express');
var router = express.Router();
var categoriesController = require("../controllers/categoriesController.js")

/* GET listing. */
router.get('/', categoriesController.getAll);

/* GET By ID listing. */
router.get('/:id', categoriesController.getById);

/* POST listing. */
router.post('/', categoriesController.create);

/*PUT listing. */
router.put('/:id', categoriesController.update);

/*DELETE listing. */
router.delete('/:id', categoriesController.delete);

/* Exports */
module.exports = router;
