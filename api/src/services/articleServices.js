const Article = require("../models/Article");


async function getAllArticlesServices(nombre, marca, activo){
    const filters = {}

    if(nombre) filters.nombre = { $regex: nombre, $options: 'i' }

    if(marca) filters.marca = marca

    if (activo !== undefined) {
        if (activo === 'true') filters.activo = true;
        else if (activo === 'false') filters.activo = false;
    }

    const articles = await Article.find(filters);
    if (!articles || articles.length === 0) return 'No hay artículos todavía'
      
    return articles
};


async function createArticleServices(objectData){
  const { nombre, marca, activo } = objectData
  
  if (!nombre || !marca || !activo) {
    throw new Error('El nombre, la marca y si está activo o no, son campos requeridos');
  }

  const article = new Article(objectData);
  return await article.save();
};


async function deleteArticleServices(objectId){
  if(!objectId){
    throw new Error('el _id es requerido.');
  }
 
  const article = await Article.findByIdAndUpdate(objectId, {
    activo: false,
    updatedAt: Date.now()
  }, 
  { new: true, runValidators: true });
  return await article.save();
};


async function updateArticleServices(objectId, objectData){
  if(!objectId || !objectData){
    throw new Error('el objectIdd y objectData es requerido.');
  }

  const { nombre, marca, activo } = objectData
  const updatedData = { updatedAt: Date.now() };

  if (nombre) updatedData.nombre = nombre;
  if (marca) updatedData.marca = marca;
  if (activo) updatedData.activo = activo;

  const updatedArticle = await Article.findByIdAndUpdate(
    objectId,
    updatedData,
    { new: true, runValidators: true }
  );

  if (!updatedArticle) {
    throw new Error('Artículo no encontrado.');
  }

  return updatedArticle
};


module.exports = {
    getAllArticlesServices,
    createArticleServices,
    deleteArticleServices,
    updateArticleServices
}