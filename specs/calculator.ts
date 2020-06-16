import { browser, element, by } from 'protractor';

describe('Calculator test', () => {
	beforeEach(() => {
		browser.get('https://juliemr.github.io/protractor-demo/');
	});

	it('Lauch URL check', () => {
		expect(browser.getTitle()).toContain('Super');
	});
	it('Add 2 numbers', () => {
		element(by.model('first')).sendKeys('33');
		element(by.model('second')).sendKeys('7');
		element(by.id('gobutton')).click();
	});
});
