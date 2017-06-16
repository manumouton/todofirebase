import { TodofirebasePage } from './app.po';

describe('todofirebase App', () => {
  let page: TodofirebasePage;

  beforeEach(() => {
    page = new TodofirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
