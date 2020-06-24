var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false); // 第三个参数标识是否在事件捕获阶段触发执行函数
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false); // 第三个参数标识是否在事件捕获阶段触发执行函数
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    getEventObj: function (event) {
        return event ? event : window.event; // 兼容IE
    },
    getTarget: function (event) {
        return event.target || event.srcElement; // 兼容IE
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false; // 兼容IE
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true; // 兼容IE
        }
    },

    // 操作剪切板
    getClipboardText: function (event) {
        var clipboardData = event.clipboardData || window.clipboardData;
        return clipboardData.getData('text');
    },
    setClipboardText: function (event, value) {
        if (event.clipboardData) {
            return event.clipboardData.setData('text/plain', value);
        } else if (window.clipboardData) {
            return window.clipboardData.setData('text', value);
        }
    }
};