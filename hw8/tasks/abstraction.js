"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
var BaseAnimal = /** @class */ (function () {
    function BaseAnimal(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    return BaseAnimal;
}());
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(name, energy) {
        return _super.call(this, name, energy) || this;
    }
    Animal.prototype.eat = function (amount) {
        console.log("".concat(this.name, " is eating."));
        this.energy += amount;
    };
    Animal.prototype.sleep = function () {
        console.log("".concat(this.name, " is sleeping."));
        this.energy += 5;
    };
    Animal.prototype.play = function () {
        console.log("".concat(this.name, " is playing."));
        this.energy -= 2;
    };
    return Animal;
}(BaseAnimal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, energy, breed) {
        var _this = _super.call(this, name, energy) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof Woof!');
        this.energy -= .1;
    };
    return Dog;
}(Animal));
exports.Dog = Dog;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, energy, declawed) {
        var _this = _super.call(this, name, energy) || this;
        _this.declawed = declawed;
        return _this;
    }
    Cat.prototype.meow = function () {
        console.log('Meow!');
        this.energy -= .1;
    };
    return Cat;
}(Animal));
exports.Cat = Cat;
