<template>
  <div class="cart-wrapper">
    <button class="cart-summary" @click="handleClickCart">
      <span class="cart-icon">Cart</span>
      <span v-if="cartStore.totalItems > 0" class="cart-badge">{{ cartStore.totalItems }}</span>
      <span v-if="cartStore.totalItems > 0" class="cart-total"
        >${{ cartStore.totalPrice.toFixed(2) }}</span
      >
    </button>

    <!-- CART DROPDOWN -->
    <div v-if="isCartOpen" class="cart-dropdown">
      <div class="cart-header">
        <h3>Shopping Cart</h3>
        <button @click="handleClickCart" class="close-btn">✕</button>
      </div>

      <div v-if="cartStore.items.length === 0" class="empty-cart">
        <p>Your cart is empty</p>
      </div>

      <div v-else class="cart-content">
        <div class="cart-items">
          <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.name" />
            <div class="item-info">
              <h4>{{ item.name }}</h4>
              <p class="item-price">${{ item.price.toFixed(2) }}</p>
              <p class="item-quantity">Qty: {{ item.quantity }}</p>
            </div>
            <button @click="cartStore.removeItem(item.id)" class="remove-btn">
              Remove Item
            </button>
          </div>
        </div>

        <div class="cart-footer">
          <div class="total-row">
            <span>Total:</span>
            <span class="total-price">${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
          <button class="checkout-btn" @click="handleCheckout">
            Checkout
          </button>
        </div>
      </div>
    </div>

    <!-- BACKDROP -->
    <div v-if="isCartOpen" class="backdrop" @click="toggleCart"></div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();
const isCartOpen = ref(false);

const handleClickCart = () => {
  isCartOpen.value = !isCartOpen.value;
};

</script>

<style scoped>
.cart-wrapper {
  position: relative;
}

.cart-summary {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  color: inherit;
  border-radius: 6px;
  transition: background 0.2s;
}

.cart-summary:hover {
  background: #F1F5F9;
}

.cart-icon {
  font-weight: 500;
}

.cart-badge {
  background: #2563EB;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
}

.cart-total {
  font-weight: 600;
  color: #2563EB;
}

/* Dropdown */
.cart-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 380px;
  max-height: 500px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #E2E8F0;
}

.cart-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748B;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.close-btn:hover {
  background: #F1F5F9;
}

.empty-cart {
  padding: 48px 24px;
  text-align: center;
  color: #94A3B8;
}

.cart-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  max-height: 320px;
}

.cart-item {
  display: grid;
  grid-template-columns: 60px 1fr auto;
  gap: 12px;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 12px;
  background: #F8FAFC;
}

.cart-item:last-child {
  margin-bottom: 0;
}

.cart-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

.item-info h4 {
  font-size: 0.875rem;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.item-price {
  font-size: 0.875rem;
  color: #2563EB;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.item-quantity {
  font-size: 0.75rem;
  color: #64748B;
  margin: 0;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 4px;
  color: #EF4444;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-footer {
  padding: 16px;
  border-top: 1px solid #E2E8F0;
  background: #F8FAFC;
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 1.125rem;
}

.total-price {
  color: #2563EB;
  font-size: 1.25rem;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background: #2563EB;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
}
</style>