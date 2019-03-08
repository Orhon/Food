<template>
  <div class="c-sandwichList">
    <div class="sandwiches">
      <p>Total price: €{{total}}</p>
      <div v-for="sandwich in this.sandwiches" :key="sandwich.length">
        <sandwich-card :name="sandwich.name" :price="sandwich.price" v-on:click.native="addSandwich(sandwich)"/>
      </div>
      
    </div>
  </div>
</template>

<script>
import SandwichCard from "@/components/SandwichCard.vue";

export default {
  name: "List",
  components: {
    SandwichCard
  },

  data() {
    return {
      sandwiches: [
        { name: "kaas", price: 2 },
        { name: "Hesp", price: 2 },
        { name: "Kaas+Hesp", price: 3.5 },
        { name: "Kip", price: 3.5 },
        { name: "Veggie", price: 4 }
      ],
      total: 0
    };
  },
  computed: {},
  methods: {
    addSandwich: function(sandwich) {
      this.$store.dispatch("addSandwich", sandwich);
      this.calculatetTotal();
    },
    getSandwiches: function() {
      let sandwichesAdded = this.$store.getters.getAddedSandwiches;
      return sandwichesAdded;
    },
    calculatetTotal: function() {
      this.total = 0;
      let sandwiches = this.$store.getters.getAddedSandwiches;
      for (let index = 0; index < sandwiches.length; index++) {
        this.total += sandwiches[index].price;
      }
    }
  }
};
</script>



<style lang="css" scoped>
</style>