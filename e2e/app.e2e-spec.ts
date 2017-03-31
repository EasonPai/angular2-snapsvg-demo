import { Angular2V1SnapsvgDemoPage } from './app.po';

describe('angular2-v1-snapsvg-demo App', () => {
  let page: Angular2V1SnapsvgDemoPage;

  beforeEach(() => {
    page = new Angular2V1SnapsvgDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
