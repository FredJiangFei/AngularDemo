import { HttpDemoPage } from './app.po';

describe('http-demo App', () => {
  let page: HttpDemoPage;

  beforeEach(() => {
    page = new HttpDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
