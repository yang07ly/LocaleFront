import { LocaleFrontPage } from './app.po';

describe('locale-front App', () => {
  let page: LocaleFrontPage;

  beforeEach(() => {
    page = new LocaleFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
