var Sex;
(function (Sex) {
    Sex["male"] = "male";
    Sex["female"] = "female";
})(Sex || (Sex = {}));
var People = /** @class */ (function () {
    function People(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    return People;
}());
var xiaoming = new People('xiaoming', 100, Sex.male);
