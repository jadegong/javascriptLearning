/*
 * Created by jade at 6/12/2020.
 */
function curryBind(fn, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments); // 此处的arguments是柯里化后的调用传参: var fun = curryBind(fn, context); fun(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(context, finalArgs);
    }
}
