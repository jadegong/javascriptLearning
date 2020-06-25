/**
 * 类似jquery事件处理，jquery将事件统一存储至$控件上。
 * Created by jade at 6/12/2020.
 */

function SelfEventTarget() {
    this.handlers = {}
}
SelfEventTarget.prototype = {
    constructor: SelfEventTarget,
    addHandlers: function(type) { // 绑定事件，可以添加多个事件处理函数
        var handlers = Array.prototype.slice.call(arguments, 1);
        if (typeof this.handlers[type] === 'undefined') {
            this.handlers[type] = [];
        }
        this.handlers[type] = this.handlers[type].concat(handlers);
    },
    fire: function (event) {
        if (!event.target) {
            event.target = this; // 执行该方法的主体
        }
        var handlers = this.handlers[event.type];
        if (handlers instanceof Array) {
            for (var i = 0; i < handlers.length; i++) {
                handlers[i](event);
            }
        }
    },
    removeHandler: function (type, handler) {
        var handlers = this.handlers[type];
        if (handlers instanceof Array) {
            for (var i = 0; i < handlers.length; i++) {
                if (handlers[i] === handler) {
                    break;
                }
            }
            handlers.splice(i, 1);
        }
    }
};