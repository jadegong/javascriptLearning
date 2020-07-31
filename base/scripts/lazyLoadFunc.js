/**
 * 惰性载入函数主要是防止每次代码都会走if判断语句的流程。
 * Created by jade at 6/11/2020.
 */

/**
 * 第一种方法在每个判断条件下都重写createXHR函数，最终返回该函数的调用，后面每次调用函数则是调用重写后的函数。
 */
function createXHR1() {
    if (typeof XMLHttpRequest != 'undefined') {
        console.log(1)
        createXHR1 = function () {
            return new XMLHttpRequest();
        };
    } else if (typeof ActiveXObject != 'undefined') {
        console.log(2)
        createXHR1 = function () {
            if (typeof arguments.callee.activeXString != 'string') {
                var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'], i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) {
                        // skip
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        };
    } else {
        console.log(3)
        createXHR1 = function () {
            throw new Error('No XHR object available!');
        };
    }
    return createXHR1();
}


/**
 * 建立一个立即执行函数，返回匿名函数，后面调用createXHR则调用相应的返回函数。
 * @type {(function(): XMLHttpRequest)|(function(): any)|(function(...[*]=))}
 */
var createXHR = function () {
    if (typeof XMLHttpRequest != 'undefined') {
        console.log(1)
        return function () {
            return new XMLHttpRequest();
        };
    } else if (typeof ActiveXObject != 'undefined') {
        console.log(2)
        return function () {
            if (typeof arguments.callee.activeXString != 'string') {
                var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'], i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) {
                        // skip
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        };
    } else {
        console.log(3)
        return function () {
            throw new Error('No XHR object available!');
        };
    }
}();
