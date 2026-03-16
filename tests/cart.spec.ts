import { test, expect } from '../fixtures'
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('TC-CART-01 Add item to cart', async ({ loggedInPage }) => {

  const inventoryPage = new InventoryPage(loggedInPage)

  await inventoryPage.addItemToCart('sauce-labs-backpack')
});

test('TC-CART-02 Remove item from cart', async ({ loggedInPage }) => {

  const inventoryPage = new InventoryPage(loggedInPage)
  const cartPage = new CartPage(loggedInPage);

  await inventoryPage.addItemToCart('sauce-labs-backpack');
  await inventoryPage.goToCart();

  await cartPage.removeItem('sauce-labs-backpack');

  await expect(cartPage.cartItems).toHaveCount(0);

});

test('TC-CART-03 Add multiple items to cart', async ({ loggedInPage }) => {

  const inventoryPage = new InventoryPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage);

  await inventoryPage.addItemToCart('sauce-labs-backpack');
  await inventoryPage.addItemToCart('sauce-labs-bike-light');

  await inventoryPage.goToCart();

  await expect(cartPage.cartItems).toHaveCount(2);

});

test('TC-CART-04 Cart persists after reload', async ({ loggedInPage }) => {

  const inventoryPage = new InventoryPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage);

  await inventoryPage.addItemToCart('sauce-labs-backpack');

  await loggedInPage.reload();

  await inventoryPage.goToCart();

  await expect(cartPage.cartItems).toBeVisible();

});