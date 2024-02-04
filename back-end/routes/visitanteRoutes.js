const express = require('express');
const router = express.Router();
const controller = require('../controllers/visitanteController.js');

router.post('/cadastrar', async (req, res) => {
    res.send(await controller.logar(req.body));
});

module.exports = router;