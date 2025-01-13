const { Router } = require('express');
const PersonagemController = require('../controllers/PersonagemController.js');

const router = Router();
const personagemController = PersonagemController()

router.get('/personagem', (req, res) => personagemController);

module.exports = router;