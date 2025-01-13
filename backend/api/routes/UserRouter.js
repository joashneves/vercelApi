const { Router } = require('express');
const UserController = require('../controllers/UserController.js');

const router = Router();
const userController = new UserController();

router.get('/user', (req, res) => userController.listaUsers(req, res));
router.get('/user/:id', (req, res) => userController.pegaUmPorId(req, res));
router.post('/user', (req, res) => userController.criaNovo(req, res));
router.put('/user/:id', (req, res) => userController.atualiza(req, res));
router.delete('/user/:id', (req, res) => userController.exclui(req, res));

module.exports = router;