<template>
  <div class="home">
    <h1>Food for Monkey</h1>
    <div class="content">
      <div class="list">
        <h3>Choose a sandwich</h3>
        <List/>
      </div>
      <div class="orderList">
        <h3>Ordered sandwiches</h3>
        <ListOrdered/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List.vue";
import ListOrdered from "@/components/ListOrdered.vue";

export default {
  name: "home",
  components: {
    List,
    ListOrdered
  }
};
</script>

<style lang="css" scoped>
.home{
  
}

.content {
  display: flex;
}

.list, .orderList {
  width: 50%;
}
</style>
