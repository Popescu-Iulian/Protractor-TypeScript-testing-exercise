"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/calculator.js'],
    // seleniumAddress: 'http://localhost:4444/wd/hub'
    directConnect: true
};
