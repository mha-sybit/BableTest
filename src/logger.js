import {
  beforeMethod,
  afterMethod, 
  onThrowOfMethod
} from 'aspect.js';

class LoggerAspect {
  // before
  @beforeMethod({
    methodNamePattern: /.*/,
    classNamePattern: /.*/
  })
  beforeLogger(meta, ...args) {
    console.log(`Invoked ${meta.name} with arguments: ${args.join(', ')}`);
  }

  // resolve
  @afterMethod({
    methodNamePattern: /.*/,
    classNamePattern: /.*/
  })
  afterMethodLogger(meta) {
    console.log(`The invocation of ${meta.name}`);
  }

  // reject
  @onThrowOfMethod({
    methodNamePattern: /.*/,
    classNamePattern: /.*/
  })
  onThrowOfMethodLogger(meta) {
    console.log(`Error during the invocation of ${meta.name}`);
  }
}

// @Wove
// class ArticleCollection {
//   getArticleById(id) {
//     return "getArticleById"
//   }
//   getArticles() {
//     return"getArticles";
//   }
//   removeArticleById(id) {
//     return "removeArticleById";
//   }
//   updateArticle(id, article) {
//     return "updateArticle";
//   }
// }

// console.log(new ArticleCollection().removeArticleById('sdaf'));


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
