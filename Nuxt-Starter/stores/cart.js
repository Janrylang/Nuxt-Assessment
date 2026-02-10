export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    totalItems(state) {
      return state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    totalPrice: (state) => {
      return state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },

  actions: {
    addItem(product) {
      console.log('addItem called with:', product);
      const existing = this.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity++;
        console.log('Incremented existing item:', existing);
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },

    removeItem(productId) {
      const index = this.items.findIndex((item) => item.id === productId);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
  },
});
