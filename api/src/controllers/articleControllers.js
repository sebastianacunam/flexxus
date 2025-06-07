const { getAllArticlesServices, createArticleServices } = require('../services/articleServices');

async function getAllArticles(req, res) {
    try {
    const filters = req.query;
    const articles = await getAllArticlesServices(filters);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener artículos', error });
  }
};

// export default async function createArticle = async (req, res) => {
//   try {
//     const newArticle = await createArticleServices(req.body);
//     res.status(201).json(newArticle);
//   } catch (error) {
//     res.status(400).json({ message: 'Error al crear artículo', error });
//   }
// };

module.exports = {
    getAllArticles
}