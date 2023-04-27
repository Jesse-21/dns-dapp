import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('distributed-dns meta-sender', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should transfer money', () => {
    page.navigateTo();
    page.setAddress(0);
    browser.driver.sleep(100);

    expect(page.getBalance()).toBe('10000');

    page.setAmount('5');
    page.setToAddress('0xC5633f7E465eBB1A9F855F93047134ef1ca61E49');
    page.clickSend();

    browser.driver.sleep(1000);
    page.navigateTo();

    expect(page.getBalance()).toBe('9950');
    page.setAddress(1);
    browser.driver.sleep(100);
    expect(page.getBalance()).toBe('50');
  });
});
