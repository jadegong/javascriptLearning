/*
 * Created by jade at 6/15/2020.
 */
var DragDrop = function () {
    var dragging = null, diffX = 0, diffY = 0, leftPx = 0, topPx = 0;
    function handleEvent(event) {
        event = EventUtil.getEventObj(event);
        var target = EventUtil.getTarget(event);
        switch (event.type) {
            case 'mousedown':
                if (target.className.indexOf('draggable') > -1) {
                    dragging = target;
                    diffX = event.clientX - dragging.offsetLeft;
                    diffY = event.clientY - dragging.offsetTop;
                }
                break;
            case 'mousemove':
                if (dragging !== null) {
                    leftPx = event.clientX - diffX;
                    topPx = event.clientY - diffY;
                    if (leftPx > document.documentElement.clientWidth - dragging.clientWidth) {
                        leftPx = document.documentElement.clientWidth - dragging.clientWidth;
                    } else if (leftPx < 0) {
                        leftPx = 0;
                    }
                    if (topPx > document.documentElement.clientHeight - dragging.clientHeight) {
                        topPx = document.documentElement.clientHeight - dragging.clientHeight;
                    } else if (topPx < 0) {
                        topPx = 0;
                    }
                    dragging.style.left = leftPx + 'px';
                    dragging.style.top = topPx + 'px';
                }
                break;
            case 'mouseup':
                dragging = null;
                break;
        }
    }

    return  {
        enable: function () {
            EventUtil.addHandler(document, 'mousedown', handleEvent);
            EventUtil.addHandler(document, 'mousemove', handleEvent);
            EventUtil.addHandler(document, 'mouseup', handleEvent);
        },
        disable: function () {
            EventUtil.removeHandler(document, 'mousedown', handleEvent);
            EventUtil.removeHandler(document, 'mousemove', handleEvent);
            EventUtil.removeHandler(document, 'mouseup', handleEvent);
        }
    }
}();

DragDrop.enable();
