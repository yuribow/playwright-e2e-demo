import { Page, Locator } from '@playwright/test';

export class InventoryPage {

  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addItemToCart(itemName: string) {
    await this.page.locator(`#add-to-cart-${itemName}`).click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

}