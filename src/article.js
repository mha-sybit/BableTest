import {Wove} from 'aspect.js';
const logger = require('./logger.js');
//import logger form './logger.js'

@Wove
class ArticleCollection {
  getArticleById(id) {
    return "getArticleById"
  }
  getArticles() {
    return"getArticles";
  }
  removeArticleById(id) {
    return "removeArticleById";
  }
  updateArticle(id, article) {
    return "updateArticle";
  }
}

console.log(new ArticleCollection().removeArticleById('sdaf'));