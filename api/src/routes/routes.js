const express = require('express');
const router = express.Router();
const { getAllArticles, createArticle } = require('../controllers/articleControllers');

// Definición de rutas
router.get('/getAllArticles', getAllArticles);
// router.post('/createArticle', createArticle);

module.exports = router; // <- esto es crucial