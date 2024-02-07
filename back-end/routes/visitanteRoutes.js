const express = require('express');
const router = express.Router();
const controller = require('../controllers/visitanteController.js');

router.post('/', async (req, res) => {
    res.send(await controller.cadastrar(req.body));
});

router.get('/', async (req, res) => {
    res.send(await controller.listar());
})

module.exports = router;