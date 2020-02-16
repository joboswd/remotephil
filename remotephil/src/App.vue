<template>
  <div id="app">
    <div class="flex">
      <div class="w-1/6">
        <SideMenu />
      </div>
      <div class="w-5/6 bg-white shadow">
        <SummaryHeader />
      </div>
    </div>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SideMenu from './components/SideMenu.vue'
import SummaryHeader from './components/SummaryHeader.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SideMenu,
    SummaryHeader
  }
}
</script>

<style lang="scss">
#app {
  margin-top: 80px;
  text-align: center;
}
</style>
