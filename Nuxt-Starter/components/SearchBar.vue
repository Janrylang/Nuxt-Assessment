<template>
  <div class="search-bar">
    <input
      type="text"
      :value="modelValue"
      placeholder="Search products..."
      @input="onInput"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const onInput = (event) => {
  const value = event.target.value;
  console.log('Search:', value);
  emit('update:modelValue', value);
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}

input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
</style>
