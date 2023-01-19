var Ming = /** @class */ (function () {
    function Ming(name, age) {
        this.name = name;
        this.age = age;
    }
    Ming.prototype.sayName = function (school) {
        return this.name + ' ' + this.age;
    };
    return Ming;
}());
var ming = {
    name: '',
    age: 0,
    sayName: function () {
        return this.name;
    }
};
