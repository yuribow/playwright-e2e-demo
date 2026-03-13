
## Overview
This document describes high-level test scenarios for the login functionality of the application.
本ドキュメントでは、アプリケーションのログイン機能についてのテストシナリオをまとめています。

Test Target:
https://www.saucedemo.com/

---

## Test Scenarios

### TS-LOGIN-01 Valid Login
User logs in with valid credentials and successfully accesses the inventory page.
有効な認証情報でログインし、インベントリページに正常にアクセスできることを確認する。

### TS-LOGIN-02 Invalid Login
User enters incorrect login credentials and the login attempt fails.
誤ったログイン情報を入力した場合、ログインに失敗することを確認する。

### TS-LOGIN-03 Locked User
Locked user attempts to log in and receives an error message.
ロックされたユーザーがログインを試みた場合、エラーメッセージが表示されることを確認する。

### TS-LOGIN-04 Empty Username
User tries to login without entering a username.
ユーザー名を入力せずにログインを試みた場合の動作を確認する。

### TS-LOGIN-05 Empty Password
User tries to login without entering a password.
パスワードを入力せずにログインを試みた場合の動作を確認する。

### TS-LOGIN-06 Empty Username and Password
User attempts login without entering both fields.
ユーザー名とパスワードの両方を入力せずにログインを試みた場合の動作を確認する。