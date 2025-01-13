const { Router } = require('express');
const UserController = require('../controllers/UserController.js')

const router = Router();

router.get('/user', (req, res) => UserController.listaUsers(req, res));
router.get('/user/:id', (req, res) => UserController.pegaUmPorId(req, res));
router.post('/user', (req, res) => UserController.criaNovo(req, res));
router.put('/user/:id', (req, res) => UserController.atualiza(req, res));
router.delete('/user/:id', (req, res) => UserController.exclui(req, res));

module.exports = router;