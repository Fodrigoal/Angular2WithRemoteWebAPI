import { Ng2DragonBallPage } from './app.po';

describe('ng2-dragon-ball App', function() {
  let page: Ng2DragonBallPage;

  beforeEach(() => {
    page = new Ng2DragonBallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
