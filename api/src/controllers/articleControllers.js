const { getAllArticlesServices, createArticleServices, deleteArticleServices, updateArticleServices } = require('../services/articleServices');

async function getAllArticlesControllers(req, res){
    try {
      const { nombre, marca, activo } = req.query
      const articles = await getAllArticlesServices(nombre, marca, activo);
      res.status(200).json(articles);
  } catch (error) {
      res.status(500).json({ message: 'Error al obtener artículos', error });
  }
};


async function createArticleControllers(req, res){
  try {
    const objectData = req.body
    const newArticle = await createArticleServices(objectData);
    res.status(201).json({ meesage: 'el artículo ha sido creado exitosamente', newArticle });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear artículo', error });
  }
};


async function deleteArticleControllers(req, res){
  try {
    const { objectId } = req.params
    const deletedArticle = await deleteArticleServices(objectId);
    res.status(201).json({ meesage: 'El artículo ha sido desactivado exitosamente', deletedArticle });
  } catch (error) {
    res.status(400).json({ message: 'Error al desactivar el artículo', error });
  }
};


async function updateArticleControllers(req, res){
  try {
    const { objectId } = req.params
    const { objectData } = req.body
    console.log('objectId', objectId);
    console.log('objectData', objectData);
    
    const updatedArticle = await updateArticleServices(objectId, objectData);
    res.status(201).json({ meesage: 'El artículo ha sido modificado exitosamente', updatedArticle });
  } catch (error) {
    res.status(400).json({ message: 'Error al desactivar el artículo', error });
  }
};


module.exports = {
    getAllArticlesControllers,
    createArticleControllers,
    deleteArticleControllers,
    updateArticleControllers
}