"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Calculator test', function () {
    beforeEach(function () {
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    });
    it('Lauch URL check', function () {
        expect(protractor_1.browser.getTitle()).toContain('Super');
    });
    it('Add 2 numbers', function () {
        protractor_1.element(protractor_1.by.model('first')).sendKeys('33');
        protractor_1.element(protractor_1.by.model('second')).sendKeys('7');
        protractor_1.element(protractor_1.by.id('gobutton')).click();
    });
});
