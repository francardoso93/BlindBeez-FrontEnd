import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // **** Navegar para todas as páginas, para que o teste de acessibilidade seja executado em todas essas
  it('should HomePage welcome message', () => {
    page.navigateTo(); //TODO: String vazia
    expect(page.getTitleText()).toEqual('BlindBeez');
  });

  it('should Scheduler welcome message', () => {
    page.navigateTo('/agendamento')
    expect(page.getTitleText()).toEqual('AGENDE SUA QUICK MASSAGE');
  });
  // ****

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
