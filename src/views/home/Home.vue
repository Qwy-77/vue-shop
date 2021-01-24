<template>
  <div class="home">
    <Homebar></Homebar>
  </div>
</template>

<script>
import Homebar from "./childcomps/HomeBar";
import { getHomeBanner } from "api/home/home";
export default {
  name: "Home",
  components: {
    Homebar,
  },
  created() {
    // this.getHomeBanner();
  },
  methods: {
    getHomeBanner(type) {
      getHomeBanner(type).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
