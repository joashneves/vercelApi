const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.status(200).json({
    stauts: 'hello world',
    linguagem: 'javascript'
}));

module.exports = router;