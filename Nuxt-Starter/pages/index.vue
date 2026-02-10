<template>
  <div>
    <h1>Products</h1>
    <SearchBar v-model="searchQuery" />
    <div v-if="products.length === 0" class="empty">No products found.</div>
    <div class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();
const searchQuery = ref('');

const products = ref([]);

onMounted(async () => {
  const response = await fetch('/api/products');
  const data = await response.json();
  products.value = data;
});

const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value;
  const query = searchQuery.value.toLowerCase();
  return products.value.filter((p) => p.name.toLowerCase().includes(query));
});

const handleAddToCart = (product) => {
  cartStore.addItem(product);
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.empty {
  text-align: center;
  padding: 48px;
  color: #94a3b8;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
