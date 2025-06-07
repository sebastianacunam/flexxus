const Article = require("../models/Article");


async function getAllArticlesServices(filters){
  const query = {};

  if (filters.nombre) {
    query.nombre = new RegExp(filters.nombre, 'i');
  }

  if (filters.activo) {
    query.activo = filters.activo === 'true';
  }

  return await Article.find(query);
};

// async function createArticleServices(data){
//   if (!data.nombre || !data.marca) {
//     throw new Error('El nombre y la marca son requeridos');
//   }

//   const article = new Article(data);
//   return await article.save();
// };

module.exports = {
    getAllArticlesServices
}