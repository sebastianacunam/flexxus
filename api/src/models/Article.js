const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    marca: {
      type: String,
      required: true,
      trim: true,
    },
    activo: {
      type: Boolean,
      required: true
    },
  },
  {
    timestamps: true
  }
);

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;