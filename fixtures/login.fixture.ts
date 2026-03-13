import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

type LoggedInFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<LoggedInFixtures>({

  loggedInPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );

    await use(page);
  }
});

export { expect } from '@playwright/test';