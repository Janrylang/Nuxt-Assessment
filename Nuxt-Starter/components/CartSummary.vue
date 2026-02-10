<template>
  <div class="cart-summary">
    <span class="cart-icon">Cart</span>
    <span v-if="totalItems > 0" class="cart-badge">{{ totalItems }}</span>
    <span v-if="totalItems > 0" class="cart-total"
      >${{ totalPrice.toFixed(2) }}</span
    >
  </div>
</template>

<script setup>
const { totalItems, totalPrice } = useCartStore();
</script>

<style scoped>
.cart-summary {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
}

.cart-icon {
  font-weight: 500;
}

.cart-badge {
  background: #2563eb;
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
  color: #2563eb;
}
</style>
