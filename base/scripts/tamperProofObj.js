/**
 * 防篡改对象
 * 1.防止扩展；
 * 2.密封对象，防止删除属性；
 * 3.冻结对象，防止修改属性值及删除属性。
 * Created by jade at 6/12/2020.
 */
function extensionDemo() {
    var person = { name: 'Nicholas' };
    Object.preventExtensions(person); // 不可扩展对象，但是里面的值可以删除和改变 [[Configurable]] [[Writable]] 均为true
    person.age = 12; // 无效，不可扩展
    person.name = 'Geog'; // 有效，可改变属性值
    console.log(person);
    delete person.name; // 有效，可删除属性值
    console.log(person);
    console.log(Object.isExtensible(person));
}
function sealDemo() {
    var person = { name: 'Nicholas' };
    Object.seal(person); // 密封对象，不可扩展，但是里面的值可以改变，不能删除 [[Configurable]]为false，[[Writable]]为true
    person.age = 12; // 无效，不可扩展
    person.name = 'Geog'; // 有效，可更改属性值
    console.log(person);
    delete person.name; // 无效，不可删除属性
    console.log(person);
    console.log(Object.isSealed(person));
}

function freezeDemo() {
    var person = { name: 'Nicholas' };
    Object.freeze(person); // 冻结对象，密封不可扩展，但是里面的值不可以改变，不能删除 [[Configurable]] [[Writable]] 均为false
    person.age = 12; // 无效，不可扩展
    person.name = 'Geog'; // 无效，可更改属性值
    console.log(person);
    delete person.name; // 无效，不可删除属性
    console.log(person);
    console.log(Object.isFrozen(person));
}

freezeDemo();
