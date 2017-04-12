import { browser, element, by } from 'protractor';

export class NgCli1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('msp-root h1')).getText();
  }
}
