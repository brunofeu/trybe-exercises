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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName.length < 3)
                throw new Error('nome tem que ter mais que 3 caracteres');
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (newBirthDate) {
            console.log(newBirthDate);
            if (newBirthDate.getTime() > new Date().getTime())
                throw new Error('data não pode ser no futuro');
            this._birthDate = newBirthDate;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
// const p2 = new Person('Alberto', new Date('2020/01/25'))
// console.log(p2)
// p2.birthDate = new Date('2020/01/25')
// console.log(p2.birthDate)
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._enrollment = "".concat(name + birthDate.getTime);
        return _this;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            this.enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () {
            return this._examsGrades;
        },
        set: function (value) {
            this._examsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "worksGrades", {
        get: function () {
            return this._worksGrades;
        },
        set: function (value) {
            this._worksGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sumNotes = function () {
        return __spreadArray(__spreadArray([], this._examsGrades, true), this._worksGrades, true).reduce(function (acc, note) { return acc += note; }, 0);
    };
    return Student;
}(Person));
// Para testar!
var testInterfaceEmployee = {
    registration: 'FNC1234567891011',
    salary: 1200.00,
    admissionDate: new Date(),
    generateRegistration: function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "FNC".concat(randomStr);
    }
};
console.log(testInterfaceEmployee);
