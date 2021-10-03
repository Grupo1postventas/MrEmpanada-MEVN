<template>
  <v-carousel :show-arrows="false" v. >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require("../assets/imgP2.png"),
          },
          {
            src: require("../assets/imgP3.png"),
          },
          {
            src: require("../assets/imgP4.png"),
          },
        ],
      }
    },
  }
</script>