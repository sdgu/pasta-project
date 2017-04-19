import { TypingGhostPage } from './app.po';

describe('typing-ghost App', () => {
  let page: TypingGhostPage;

  beforeEach(() => {
    page = new TypingGhostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
