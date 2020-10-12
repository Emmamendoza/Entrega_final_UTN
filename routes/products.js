var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController.js")

/* GET listing. */
router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);

/* POST listing. */
//llamado a validateUser para verificar token
//router.post('/',(req,res,next)=>{req.app.validateUser(req,res,next)}, productsController.create);
router.post('/',productsController.create);

/* PUT listing. */
router.put('/:id', productsController.update);

/* DELETE listing. */
router.delete('/:id', productsController.delete);

/* Exports */
module.exports = router;
