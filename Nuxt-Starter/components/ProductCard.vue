<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" />
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      <button @click="handleAddToCart">Add to Cart</button>
    </div>
    <NuxtLink :to="`/products/${product.id}`" class="view-link">
      View Details
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const handleAddToCart = () => {
  props.product.quantity = (props.product.quantity || 0) + 1;
};
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 16px;
  flex: 1;
}

.product-info h3 {
  font-size: 1rem;
  margin-bottom: 8px;
}

.price {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 12px;
}

button {
  width: 100%;
  padding: 8px 16px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
}

button:hover {
  background: #1d4ed8;
}

.view-link {
  display: block;
  text-align: center;
  padding: 10px;
  color: #64748b;
  text-decoration: none;
  font-size: 0.875rem;
  border-top: 1px solid #e2e8f0;
}

.view-link:hover {
  color: #2563eb;
}
</style>
