// import {Wove} from 'aspect.js';

// function Logger(target, pattern) {
//     return new Proxy(target, {
//         get: function(obj, prop) {
//             var value, name;
//             if (!Reflect.has(obj, prop)) {
//                 return;
//             }
//             name = target.name || target.constructor.name;
//             value = Reflect.get(obj, prop);
//             if (typeof value === 'function') {
//                 value = function() {
//                     let result = Reflect.apply(obj[prop], obj, arguments);
//                     if (pattern.exec(prop)) {
//                         console.log(`Function ${prop} retrieved result ${JSON.stringify(result)}`);
//                     }
//                     return result;
//                 }.bind(obj);
//             }
//             return value;
//         }
//     });
// }


// function wove(pattern) {
//     return function (target) {
//         target.prototype = Logger(target.prototype, pattern);
//     };
// }


// @wove(/^get.*/)
// class BookCollection {
//     getNameByISBN(isbn) {
//         return {
//             isbn: isbn,
//             name: 'Proxy + Decorators = AOP'
//         };
//     }
// }

// console.log(new BookCollection().getNameByISBN('sdaf'));