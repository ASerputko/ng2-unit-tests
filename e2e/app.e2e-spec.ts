import { Ng2UnitTestsPage } from './app.po';

describe('ng2-unit-tests App', () => {
  let page: Ng2UnitTestsPage;

  beforeEach(() => {
    page = new Ng2UnitTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
