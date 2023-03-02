import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    product: {},
    categories: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCategories(state) {
      return state.categories;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async loadProducts({ commit }) {
      const response = await fetch(`${URL}`);
      const data = await response.json();
      commit("setProducts", data);
    },
    async loadProduct({ commit }, id) {
      const response = await fetch(`${URL}/${id}`);
      const data = await response.json();
      commit("setProduct", data);
    },
    async loadCategories({ commit }) {
      const response = await fetch(`${URL}/categories`);
      const data = await response.json();
      commit("setCategories", data);
    },
  },
  modules: {},
});

const URL = "https://fakestoreapi.com/products";
