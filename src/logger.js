// https://github.com/mgechev/aspect.js

import {
  beforeMethod,
  afterMethod,
  aroundMethod, 
  onThrowOfMethod,
  asyncOnThrowOfMethod,
  beforeStaticMethod,
  afterStaticMethod,
  aroundStaticMethod,
  onThrowOfStaticMethod,
  asyncOnThrowOfStaticMethod
} from 'aspect.js';

class LoggerAspect {
// non static 
  // before
  @beforeMethod({
    methodNamePattern: /.*/,
    classNamePattern: /.*/
  })
  beforeLogger(meta, ...args) {

    console.log(meta.woveMetadata);

    if (meta.className) {
      console.log(`Enter method: ${meta.method.name} in class: ${meta.className} with arguments: ${args.join(', ')}`);
    } else {
      console.log(`Enter method: ${meta.method.name} with arguments: ${meta.method.args.join(', ')}`);  
    }
  }

  // after
  @afterMethod({
    methodNamePattern: /.*/,
    classNamePattern: /.*/
  })
  afterLogger(meta) {
    if (meta.className) {
      console.log(`Exit method: ${meta.method.name} in class: ${meta.className} with return: ${meta.method.result}`);
    } else {
      console.log(`Exit method: ${meta.method.name} with return: ${meta.method.result}`);
    }
  }

  // around
  @aroundMethod({
    methodNamePattern: /notUsed/,
    classNamePattern: /notUsed/
  })
  aroundLogger(meta, ...args) {
    console.log(`Arround method: ${meta.method.name}`);
  }

  // sync throw
  @onThrowOfMethod({
    methodNamePattern: /.*/,
    classNamePattern: /.*/
  })
  onThrowLogger(meta) {
    console.log(`Sync throw method: ${meta.method.name}`);
  }

    // async throw
  @asyncOnThrowOfMethod({
    methodNamePattern: /.*/,
    classNamePattern: /.*/
  })
  asyncOnThrowLogger(meta) {
    console.log(`Async throw method: ${meta.method.name}`);
  }


// static block
  // before static
  @beforeStaticMethod({
    methodNamePattern: /.*/,
    classNamePattern: /.*/
  })
  beforeStaticLogger(meta, ...args) {

    console.log(meta.woveMetadata);

    if (meta.className) {
      console.log(`Enter static method: ${meta.method.name} in class: ${meta.className} with arguments: ${args.join(', ')}`);
    } else {
      console.log(`Enter static method: ${meta.method.name} with arguments: ${meta.method.args.join(', ')}`);  
    }
  }

  // after static
  @afterStaticMethod({
    methodNamePattern: /.*/,
    classNamePattern: /.*/
  })
  afterStaticLogger(meta) {
    if (meta.className) {
      console.log(`Exit static method: ${meta.method.name} in class: ${meta.className} with return: ${meta.method.result}`);
    } else {
      console.log(`Exit static method: ${meta.method.name} with return: ${meta.method.result}`);
    }
  }

  // around static
  @aroundStaticMethod({
    methodNamePattern: /notUsed/,
    classNamePattern: /notUsed/
  })
  aroundStaticLogger(meta, ...args) {
    console.log(`Arround static method: ${meta.method.name}`);
  }

  // sync throw static
  @onThrowOfStaticMethod({
    methodNamePattern: /.*/,
    classNamePattern: /.*/
  })
  onThrowStaticLogger(meta) {
    console.log(`Sync throw static method: ${meta.method.name}`);
  }

    // async throw static
  @asyncOnThrowOfStaticMethod({
    methodNamePattern: /.*/,
    classNamePattern: /.*/
  })
  asyncOnThrowStaticLogger(meta) {
    console.log(`Async throw static method: ${meta.method.name}`);
  }
}

// @Wove({ bar: 42 })
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

// @Wove()
// class Test {
//   static my_function(argument) {
//     return argument;
//   }
// }

// console.log(new ArticleCollection().removeArticleById('sdaf'));
// console.log(Test.my_function('TestTest'));



// class LoggerAspect {
//   @beforeMethod({
//     classNamePattern: /^Article/,
//     methodNamePattern: /^(get|set)/
//   })
//   invokeBeforeMethod(meta) {
//     // meta.woveMetadata == { bar: 42 }
//     console.log(`Inside of the logger. Called ${meta.className}.${meta.method.name} with args: ${meta.method.args.join(', ')}.`);
//   }
// }
