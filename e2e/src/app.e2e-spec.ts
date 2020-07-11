import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // Disparando o erro 'environment.prod.ts is part of the TypeScript compilation but it's unused.\nAdd only entry points to the 'files' or 'include' properties in your tsconfig'
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('BlindBeez');
  });
  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
