# Login Test Cases

## TC-01 Valid Login

| Field | Value | 日本語 |
|------|------|------|
| Test Case ID | TC-LOGIN-01 | - |
| Scenario | TS-LOGIN-01 Valid Login | - |
| Preconditions | User is on login page | ユーザーがログインページを表示していること |
| Test Steps | 1. Enter valid username<br>2. Enter valid password<br>3. Click Login | 1. 有効なユーザー名を入力する<br>2. 有効なパスワードを入力する<br>3. ログインボタンをクリックする |
| Test Data | standard_user / secret_sauce | - |
| Expected Result | User is redirected to inventory page | ユーザーがインベントリページへリダイレクトされること |

## TC-02 Invalid Username

| Field | Value | 日本語 |
|------|------|------|
| Test Case ID | TC-LOGIN-02 | - |
| Scenario | TS-LOGIN-02 Invalid Login | - |
| Preconditions | User is on login page | ユーザーがログインページを表示していること |
| Test Steps | 1. Enter invalid username<br>2. Enter valid password<br>3. Click Login | 1. 無効なユーザー名を入力する<br>2. 有効なパスワードを入力する<br>3. ログインボタンをクリックする |
| Test Data | wrong_user / secret_sauce | - |
| Expected Result | Error message displayed | エラーメッセージが表示されること |

## TC-03 Invalid Password

| Field | Value | 日本語 |
|------|------|------|
| Test Case ID | TC-LOGIN-03 | - |
| Scenario | TS-LOGIN-02 Invalid Login | - |
| Preconditions | User is on login page | ユーザーがログインページを表示していること |
| Test Steps | 1. Enter valid username<br>2. Enter invalid password<br>3. Click Login | 1. 有効なユーザー名を入力する<br>2. 無効なパスワードを入力する<br>3. ログインボタンをクリックする |
| Test Data | standard_user / wrong_password | - |
| Expected Result | Error message displayed | エラーメッセージが表示されること |

## TC-04 Locked User Login

| Field | Value | 日本語 |
|------|------|------|
| Test Case ID | TC-LOGIN-04 | - |
| Scenario | TS-LOGIN-03 Locked User | - |
| Preconditions | User is on login page | ユーザーがログインページを表示していること |
| Test Steps | 1. Enter locked user credentials<br>2. Click Login | 1. ロックされたユーザーの認証情報を入力する<br>2. ログインボタンをクリックする |
| Test Data | locked_out_user / secret_sauce | - |
| Expected Result | Error message displayed | エラーメッセージが表示されること |

## TC-LOGIN-05 Empty Username

| Field | Value | 日本語 |
|------|------|------|
| Test Case ID | TC-LOGIN-05 | - |
| Scenario | TS-LOGIN-04 Empty Username | - |
| Preconditions | User is on login page | ユーザーがログインページを表示していること |
| Test Steps | 1. Leave username field empty<br>2. Enter valid password<br>3. Click Login | 1. ユーザー名を入力しない<br>2. 有効なパスワードを入力する<br>3. ログインボタンをクリックする |
| Test Data | (empty) / secret_sauce | - |
| Expected Result | Error message displayed | エラーメッセージが表示されること |

## TC-LOGIN-06 Empty Password

| Field | Value | 日本語 |
|------|------|------|
| Test Case ID | TC-LOGIN-06 | - |
| Scenario | TS-LOGIN-05 Empty Password | - |
| Preconditions | User is on login page | ユーザーがログインページを表示していること |
| Test Steps | 1. Enter valid username<br>2. Leave password field empty<br>3. Click Login | 1. 有効なユーザー名を入力する<br>2. パスワードを入力しない<br>3. ログインボタンをクリックする |
| Test Data | standard_user / (empty) | - |
| Expected Result | Error message displayed | エラーメッセージが表示されること |

## TC-LOGIN-07 Empty Both Fields

| Field | Value | 日本語 |
|------|------|------|
| Test Case ID | TC-LOGIN-07 | - |
| Scenario | TS-LOGIN-06 Empty Username and Password | - |
| Preconditions | User is on login page | ユーザーがログインページを表示していること |
| Test Steps | 1. Leave username field empty<br>2. Leave password field empty<br>3. Click Login | 1. ユーザー名を入力しない<br>2. パスワードを入力しない<br>3. ログインボタンをクリックする |
| Test Data | (empty) / (empty) | - |
| Expected Result | Error message displayed | エラーメッセージが表示されること |
