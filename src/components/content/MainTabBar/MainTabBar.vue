<template>
  <div class="MainTabBar">
    <TabBar class="TabBar">
      <TabBarItem path="/home">
        <div slot="icon" class="item-icon"></div>
        <div slot="text">发现</div>
      </TabBarItem>
      <TabBarItem path="/poscast">
        <div slot="icon" class="item-icon"></div>
        <div slot="text">播客</div>
      </TabBarItem>
      <TabBarItem path="/spruce">
        <div slot="icon" class="item-icon"></div>
        <div slot="text">云村</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <div slot="icon" class="item-icon"></div>
        <div slot="text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar/TabBar";
import TabBarItem from "components/common/TabBar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style  scoped>
.item-icon {
  font-family: "icomoon";
  font-size: 24px;
}
.TabBar {
  padding: 3px 0;
}
</style>