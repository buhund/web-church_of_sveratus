<script>

export default {
data() {
  return {
    product: 'Holy Finger of Sveratus',
    brand: 'Sveratus Philangis',
    selectedVariant: 0,
    details: ['110% Authentic', 'Blessed', 'Holy'],
    variants: [
      { id: 2234, color: 'red', image: '@/assets/shop/finger-01-premium.png', quantity: 2 },
      { id: 2235, color: 'green', image: '@/assets/shop/finger-02-medium.png', quantity: 11 },
      { id: 2235, color: 'blue', image: '@/assets/shop/finger-03-low.png', quantity: 17 },
    ],
    reviews: []
  }
},

methods: {
  addToCart() {
    this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
  },
  updateVariant(index) {
    this.selectedVariant = index
  },
  addReview(review) {
    this.reviews.push(review)
  },
},

computed: {
  title() {
    return this.brand + ' ' + this.product
  },
  image() {
    return this.variants[this.selectedVariant].image
  },
  inStock() {
    return this.variants[this.selectedVariant].quantity
  },
  shipping() {
    if (this.premium) {
      return 'Free'
    }
    return 2.99
  },
},

};
</script>

<template>
  <div class="shop-container">
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
        <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>

          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>

          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color }">
          </div>

          <button
              class="button"
              :class="{ disabledButton: !inStock }"
              :disabled="!inStock"
              v-on:click="addToCart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.shop-container {
  width: 100%;
  max-height: 98vh;
  overflow-y: auto;
  padding-top: 22px;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  background-color: rgba(215, 215, 215, 0.86);
  border: 2px solid #222222;
  align-content: flex-start;
}

body {
  background-color: #f2f2f2;
  margin: 0px;
  color: #282828;
}

.button {
  margin: 30px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 18px;
  width: 160px;
  height: 60px;
  color: white;
  padding: 20px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
  inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
  inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}

.cart {
  margin: 25px 100px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 30px 30px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px 12px rgba(0, 0, 0, 0.57);
}

.color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
}


.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}

h1 {
  font-size: 50px;
}

h3 {
  font-size: 25px;
}

img {
  border: 2px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px 12px rgba(0, 0, 0, 0.57);
}

input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

li {
  font-size: 18px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}

.out-of-stock-img {
  opacity: 0.5;
}

p {
  font-size: 22px;
}

.product-display {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.product-image,
.product-info {
  width: 50%;
}

.review-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.review-container {
  width: 425px;
  padding: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  margin-left: 40px;
  border: 2px solid #d8d8d8;
}

.review-container li {
  margin-bottom: 30px;
}

.review-form .button {
  display: block;
  margin: 30px auto;
}

select {
  height: 40px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}

textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
}


@media (min-width: 1024px) {
  .about {
    min-height: 80vh;
    display: flex;
    align-items: flex-start;
  }
}


</style>