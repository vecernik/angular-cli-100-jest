import { NgCli1Page } from './app.po';

describe('ng-cli1 App', () => {
  let page: NgCli1Page;

  beforeEach(() => {
    page = new NgCli1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('msp works!');
  });
});
