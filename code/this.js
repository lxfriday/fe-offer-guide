console.log(this)
console.log(arguments)
console.log(global)

// {}
// [Arguments] {
//   '0': {},
//   '1': [Function: require] {
//     resolve: [Function: resolve] { paths: [Function: paths] },
//     main: Module {
//       id: '.',
//       path: 'C:\\Users\\liu32\\code\\work\\fe-offer-guide\\code',
//       exports: {},
//       parent: null,
//       filename: 'C:\\Users\\liu32\\code\\work\\fe-offer-guide\\code\\this.js',
//       loaded: false,
//       children: [],
//       paths: [Array]
//     },
//     extensions: [Object: null prototype] {
//       '.js': [Function],
//       '.json': [Function],
//       '.node': [Function],
//       '.mjs': [Function]
//     },
//     cache: [Object: null prototype] {
//       'C:\\Users\\liu32\\code\\work\\fe-offer-guide\\code\\this.js': [Module]
//     }
//   },
//   '2': Module {
//     id: '.',
//     path: 'C:\\Users\\liu32\\code\\work\\fe-offer-guide\\code',
//     exports: {},
//     parent: null,
//     filename: 'C:\\Users\\liu32\\code\\work\\fe-offer-guide\\code\\this.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'C:\\Users\\liu32\\code\\work\\fe-offer-guide\\code\\node_modules',
//       'C:\\Users\\liu32\\code\\work\\fe-offer-guide\\node_modules',
//       'C:\\Users\\liu32\\code\\work\\node_modules',
//       'C:\\Users\\liu32\\code\\node_modules',
//       'C:\\Users\\liu32\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ]
//   },
//   '3': 'C:\\Users\\liu32\\code\\work\\fe-offer-guide\\code\\this.js',
//   '4': 'C:\\Users\\liu32\\code\\work\\fe-offer-guide\\code'
// }
// Object [global] {
//   global: [Circular],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(util.promisify.custom)]: [Function]
//   }
// }
