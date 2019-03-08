<template>
  <div class="c-brood"> 
    <p>Brood: {{name}}</p>      
    <p>Prijs: €{{price}}</p>   
    
  </div>

  
</template>

<script>

export default {
  name: 'BroodCard',
  components:{
  },
  props:{
            name:{
                type: String
            },
            price:{
              type: Number
            }
    },

}
</script>



<style lang="css" scoped>

.c-brood{
  cursor: pointer;
  display: block;
  width: 300px;
  font-size: 2em;
  border: 2px solid black;
  margin: 0.5em;
}

</style>