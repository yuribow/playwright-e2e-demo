# Playwright QA Automation Portfolio

This project is a QA portfolio that demonstrates automated end-to-end testing using **Playwright**.
このプロジェクトは **Playwright** を使用してE2Eテストを自動化したQAポートフォリオです。

---

# Tech Stack（使用技術）

- Playwright
- TypeScript
- Node.js
- GitHub Actions

---

# Project Structure（プロジェクト構成）

```
playwright-qa-portfolio
│
├ tests
│ └ login.spec.ts
│
├ pages
│ └ LoginPage.ts
│
├ test-data
│ └ users.ts
│
├ test-design
│ ├ login-test-scenarios.md
│ └ login-test-cases.md
│
├ .github
│ └ workflows
│  └ playwright.yml
│
├ playwright.config.ts
└ README.md
```

---

# Test Target
Test site used in this project:
このプロジェクトでテスト対象として使用しているサイト：

https://www.saucedemo.com/

---

# Test Scenarios

Detailed test design documents are available in the `test-design` folder.
詳細なテスト設計は `test-design` フォルダに記載しています。

---

# Running Tests

Install dependencies（依存関係のインストール）
```
npm install
```

Run tests（テスト実行）
```
npx playwright test
```

Run tests with UI mode（UIモードで実行）
```
npx playwright test --ui
```

View test report（テストレポート表示）
```
npx playwright show-report
```

---

# Continuous Integration（CI）

This repository includes GitHub Actions for automated test execution.
このリポジトリでは GitHub Actions によるCIを構築しています。

Tests run automatically when:
以下の場合にテストが自動実行されます。

- Code is pushed to the main branch
- Pull request is created

Workflow file:
`.github/workflows/playwright.yml`