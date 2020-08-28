/**
 * IndexedDB和MySQL等数据库类似，最大特色是使用对象保存数据；
 * 一个IndexedDB数据库，就是一组位于相同命名空间下的对象的集合。
 * request = indexedDB.open('databaseName');
 * request.onerror = function (event) {event.target.errorCode}; // event.target === request
 * request.onsuccess = function (event) {database = event.target.result}; // event.target === request
 */

 