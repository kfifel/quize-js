"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
var Question = /** @class */ (function () {
    function Question(question, choices, answers) {
        this._question = question;
        this._choices = choices;
        this._answers = answers;
    }
    Object.defineProperty(Question.prototype, "question", {
        get: function () {
            return this._question;
        },
        set: function (value) {
            this._question = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "choices", {
        get: function () {
            return this._choices;
        },
        set: function (value) {
            this._choices = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "answers", {
        get: function () {
            return this._answers;
        },
        set: function (value) {
            this._answers = value;
        },
        enumerable: false,
        configurable: true
    });
    Question.prototype.getAllData = function () {
        fetch("../data/Question.json").then(function (res) { return console.log(res); });
    };
    return Question;
}());
exports.Question = Question;
