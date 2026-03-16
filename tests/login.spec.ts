import { test, expect } from '../fixtures';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';


test.describe('Login Tests', () => {

  test('TC-LOGIN-01 Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );

    await expect(page).toHaveURL(/inventory/);
  });

  test('TC-LOGIN-02 Invalid Username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC-LOGIN-03 Invalid Password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.invalidPassword.username,
      users.invalidPassword.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC-LOGIN-04 Locked User', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.lockedUser.username,
      users.lockedUser.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC-LOGIN-05 Empty Username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      '',
      users.standardUser.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC-LOGIN-06 Empty Password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.standardUser.username,
      ''
    );

    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC-LOGIN-07 Empty Both Fields', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      '',
      ''
    );

    await expect(loginPage.errorMessage).toBeVisible();
  });

});