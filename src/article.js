import {Wove} from 'aspect.js';
const logger = require('./logger.js');

@Wove({ bar: 42 })
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

@Wove()
class Test {
  static my_function(argument) {
    return argument;
  }
}

console.log(new ArticleCollection().removeArticleById('sdaf'));
console.log(Test.my_function('TestTest'));