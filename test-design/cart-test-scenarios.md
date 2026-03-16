
## Overview
This document describes high-level test scenarios for the cart functionality.  
このドキュメントではカート機能に関するテストシナリオを記載します。

Test Target:
https://www.saucedemo.com/

---

# Cart Test Scenarios

### TS-CART-01 Add Item to Cart
User adds an item to the cart and the item appears in the cart.  
ユーザーが商品をカートに追加し、カートに商品が表示されることを確認する。

### TS-CART-02 Remove Item from Cart
User removes an item from the cart and the item is removed successfully.  
ユーザーがカートから商品を削除できることを確認する。

### TS-CART-03 Add Multiple Items to Cart
User adds multiple items to the cart and all items are displayed in the cart.  
ユーザーが複数の商品をカートに追加できることを確認する。

### TS-CART-04 Cart persists after reload
User adds an item to the cart, reloads the page, and verifies that the item remains in the cart.  
ユーザーが商品をカートに追加した後にページをリロードしても、カート内の商品が保持されていることを確認する。