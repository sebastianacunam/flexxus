const express = require('express');
const router = express.Router();
const { getAllArticlesControllers, createArticleControllers, deleteArticleControllers, updateArticleControllers } = require('../controllers/articleControllers');


router.get('/getAllArticles', getAllArticlesControllers);
router.post('/createArticle', createArticleControllers);
router.delete('/deleteArticle/:objectId', deleteArticleControllers);
router.patch('/updateArticle/:objectId', updateArticleControllers);

module.exports = router;