var express = require('express');
var router = express.Router();

var salesController = require("../controllers/salesController")

/* GET users listing. */
router.get('/', salesController.getAll);
router.get('/:id', salesController.getById);
//llamado a validateUser para verificar token
//router.post('/',(req,res,next)=>{req.app.validateUser(req,res,next)}, salesController.create);
router.post('/',salesController.create);
router.put('/:id', salesController.update);
router.delete('/:id', salesController.delete);
module.exports = router;
