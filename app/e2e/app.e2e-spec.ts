import { DockerappPage } from './app.po';

describe('dockerapp App', () => {
  let page: DockerappPage;

  beforeEach(() => {
    page = new DockerappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
