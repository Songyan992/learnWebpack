// 整体是一个匿名函数，传入一个对象
(function (modules) { // webpackBootstrap//webpack启动函数
  // The module cache 先定义一个缓存
  var installedModules = {};
  // key:value
  //"./src/index.js":{}
  // The require function 实现了require方法
  function __webpack_require__(moduleId) {//"./src/index.js"
    // Check if module is in cache//检测模块是否在缓存中
    if (installedModules[moduleId]) { //不在缓存中
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    // Execute the module function //执行模块中的方法 通过call()
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    // Flag the module as loaded
    module.l = true;
    // Return the exports of the module
    return module.exports;
  }
  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;
  // expose the module cache
  __webpack_require__.c = installedModules;
  // define getter function for harmony exports
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };
  // define __esModule on exports
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };
  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
    return ns;
  };
  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ?
      function getDefault() { return module['default']; } :
      function getModuleExports() { return module; };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };
  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  // __webpack_public_path__
  __webpack_require__.p = "";
  // Load entry module and return exports 加载入口模块，返回 出口
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
/************************************************************************/
({
  //xxx:xxx //对象key和value
  "./src/a.js"://key ==>当前模块文件的路径
    /*! no static exports found */
    (function (module, exports) {//value ==>一个函数,module.exports='和速度速度呢'
      eval("module.exports='和速度速度呢'\n\n//# sourceURL=webpack:///./src/a.js?");
    }),
  "./src/index.js"://key ==>当前模块文件的路径
    /*! no static exports found */
    (function (module, exports, __webpack_require__) {//value:执行__webpack_require__(' ./a.js')
      eval("console.log('hello webpack');\n\nlet str =__webpack_require__(/*! ./a.js */ \"./src/a.js\")\nconsole.log(str);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
    })

});

// webpack 大致流程：
// 把所有需要解析的模块变成一个对象，通过webpackBootstrap webpack唯一的入口去加载这个对象，
//依次递归实现 的依赖关系，通过入口运行所有的文件



