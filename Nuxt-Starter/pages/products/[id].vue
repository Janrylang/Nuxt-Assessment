<template>
  <div>
    <NuxtLink to="/" class="back-link">Back to Products</NuxtLink>

    <div v-if="pending" class="loading">Loading...</div>
    <div v-else-if="error" class="error">Product not found.</div>
    <div v-else-if="product" class="product-detail">
      <img :src="product.image" :alt="product.name" />
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p class="price">${{ product.price.toFixed(2) }}</p>
        <p class="description">{{ product.description }}</p>
        <button @click="handleAddToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const cartStore = useCartStore();

const {
  data: product,
  pending,
  error,
} = await useFetch(`/api/products/${route.params.id}`);

const handleAddToCart = () => {
  if (product.value) {
    cartStore.addItem({
      id: product.value.id,
      name: product.value.name,
      price: product.value.price,
    });
  }
};
</script>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #2563eb;
  text-decoration: none;
  font-size: 0.875rem;
}

.back-link:hover {
  text-decoration: underline;
}

.loading,
.error {
  text-align: center;
  padding: 48px;
  color: #94a3b8;
}

.error {
  color: #ef4444;
}

.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.product-detail img {
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
}

.product-info {
  padding: 32px 32px 32px 0;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 16px;
}

.description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
}

button {
  padding: 12px 24px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
}

button:hover {
  background: #1d4ed8;
}
</style>
