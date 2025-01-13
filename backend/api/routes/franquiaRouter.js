const { Router } = require('express')
const FranquiaController = require('../controllers/FranquiaController.js')

const franquiaController = new FranquiaController();
const router = new Router();

router.get('/franqui', (req, res) => franquiaController)

module.exports = router;