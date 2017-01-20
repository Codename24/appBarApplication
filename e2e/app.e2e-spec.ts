import { AppBarApplicationPage } from './app.po';

describe('app-bar-application App', function() {
  let page: AppBarApplicationPage;

  beforeEach(() => {
    page = new AppBarApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
