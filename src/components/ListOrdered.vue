<template>
  <div class="c-broodlijst">
    <div class="c-besteldlijst">
      <button v-on:click="createPDF()">Create pdf</button>
      <div v-for="sandwich in this.getSandwiches()" :key="sandwich.length">
        <sandwich-card :name="sandwich.name" :price="sandwich.price"/>
      </div>
    </div>
  </div>
</template>

<script>
import SandwichCard from "@/components/SandwichCard.vue";
import jsPDF from "jspdf";

export default {
  name: "ListOrdered",
  components: {
    SandwichCard
  },
  props: {
    isMySiblingClicked: {
      type: Boolean
    }
  },

  methods: {
    getSandwiches: function() {
      let sandwichesAdded = this.$store.getters.getAddedSandwiches;
      return sandwichesAdded;
    },
    createPDF: function() {
      let pdfName = "sandwiches";
      var doc = new jsPDF();
      let sandwiches = this.$store.getters.getAddedSandwiches;
      if (sandwiches.length < 1) {
        alert("No sandwiches ordered yet");
      } else {
        doc.text("A list of ordered sandwiches:", 10, 10);
        for (let index = 0; index < sandwiches.length; index++) {
          console.log(sandwiches, index);
          doc.text(
            sandwiches[index].name + ": €" + sandwiches[index].price,
            10,
            20 + 20 * index
          );
        }
        doc.save(pdfName + ".pdf");
      }
    }
  }
};
</script>



<style lang="css" scoped>
</style>