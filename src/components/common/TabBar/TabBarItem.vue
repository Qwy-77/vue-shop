<template>
  <div class="TabBarItem" @click="itemClick">
    <div class="item-icon" :class="{ active: isActive }">
      <slot name="icon"></slot>
    </div>
    <div class="item-text" :class="{ active: isActive }">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
};
</script>

<style  scoped>
.TabBarItem {
  flex: 1;
  text-align: center;
}
.item-text {
  font-size: 10px;
  margin-top: 2px;
}
.active {
  color: red;
}
</style>