const express = require('express');
const router = express.Router();
const pessoasController = require('../controllers/pessoascontroller.js');

router.post('/pessoas', pessoasController.createPessoa);
router.get('/pessoas', pessoasController.getAllPessoas);
router.get('/pessoas/:id', pessoasController.getPessoasById);
router.put('/pessoas/:id', pessoasController.updatePessoa);
router.delete('/pessoas/:id', pessoasController.deletePessoa);

module.exports = router;
