var express = require('express');
var router = express.Router();
var salesController = require("../controllers/salesController")

/* GET listing. */
router.get('/', salesController.getAll);
router.get('/:id', salesController.getById);

/* POST listing. */
router.post('/',salesController.create);

/* PUT listing. */


/* DELETE listing. */
router.delete('/:id', salesController.delete);

/* Exports */
module.exports = router;
