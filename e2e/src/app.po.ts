import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo(route?: string) {
      return browser.get(browser.baseUrl + route) as Promise<any>;
  }

  getTitleText() {
    return element(by.css("h1")).getText() as Promise<string>;
  }
}
