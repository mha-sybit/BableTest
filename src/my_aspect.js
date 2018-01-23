import {
	beforeMethod, 
	Wove
} from 'aspect.js';

class LoggerAspect {
  @beforeMethod({
    classNamePattern: /^Article/,
    methodNamePattern: /^(get|set)/
  })
  invokeBeforeMethod(meta) {
    // meta.woveMetadata == { bar: 42 }
    console.log(`Inside of the logger. Called ${meta.className}.${meta.method.name} with args: ${meta.method.args.join(', ')}.`);
  }
}

let Article = class Article {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}

@Wove({ bar: 42 })
class ArticleCollection {
  constructor(id, title, content) {
    this. articles = [];
  }

  getArticle(id) {
    console.log(`Getting article with id: ${id}.`);
    return this.articles.filter(a => {
      return a.id === id;
    }).pop();
  }
  setArticle(article) {
    console.log(`Setting article with id: ${article.id}.`);
    this.articles.push(article);
  }
}

new ArticleCollection().getArticle(1);