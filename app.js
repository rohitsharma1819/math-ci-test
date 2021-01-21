const { Module } = require("module");

module.exports = class Math {

    Add(first, second) {
        return first + second;
    }

    Sub(first, second) {
        return first - second;
    }
}
