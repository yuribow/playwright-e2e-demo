import { Page, Locator } from '@playwright/test';

export class CartPage {

  readonly page: Page;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
  }

  async removeItem(itemName: string) {
    await this.page.locator(`#remove-${itemName}`).click();
  }

}