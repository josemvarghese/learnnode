import { NodejsappPage } from './app.po';

describe('nodejsapp App', () => {
  let page: NodejsappPage;

  beforeEach(() => {
    page = new NodejsappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
