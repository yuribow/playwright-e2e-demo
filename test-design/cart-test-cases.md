# Cart Test Cases

## TC-CART-01 Add Item to Cart

| Field | Value | 日本語 |
|------|------|------|
| Test Case ID | TC-CART-01 | - |
| Scenario | TS-CART-01 Add Item to Cart | カートに商品を追加 |
| Test Steps | 1. Login<br>2. Click "Add to cart"<br>3. Open cart page | 1. ログイン<br>2. 商品をカートに追加<br>3. カートページを開く |
| Test Data | standard_user | - |
| Expected Result | Item is displayed in cart | 商品がカートに表示されること |

---

## TC-CART-02 Remove Item from Cart

| Field | Value | 日本語 |
|------|------|------|
| Test Case ID | TC-CART-02 | - |
| Scenario | TS-CART-02 Remove Item | カートから商品削除 |
| Test Steps | 1. Login<br>2. Add item to cart<br>3. Remove item | 1. ログイン<br>2. 商品追加<br>3. 商品削除 |
| Test Data | standard_user | - |
| Expected Result | Item is removed from cart | 商品が削除されること |

---

## TC-CART-03 Add Multiple Items

| Field | Value | 日本語 |
|------|------|------|
| Test Case ID | TC-CART-03 | - |
| Scenario | TS-CART-03 Multiple Items | 複数商品追加 |
| Test Steps | 1. Login<br>2. Add multiple items<br>3. Open cart | 1. ログイン<br>2. 複数商品追加<br>3. カート確認 |
| Test Data | standard_user | - |
| Expected Result | All items are displayed in cart | すべての商品が表示されること |

## TC-CART-04 Cart Persists After Page Reload

| Field | Value | 日本語 |
|------|------|------|
| Test Case ID | TC-CART-04 | - |
| Scenario | TS-CART-04 Cart Persists After Page Reload | ページリロード後もカート内容が保持される |
| Test Steps | 1. Login with valid user<br>2. Add item to cart<br>3. Reload the page<br>4. Open the cart page | 1. 有効なユーザーでログイン<br>2. 商品をカートに追加<br>3. ページをリロード<br>4. カートページを開く |
| Test Data | standard_user | - |
| Expected Result | The item added before reload is still displayed in the cart | リロード前に追加した商品がカートに表示されたままであること |