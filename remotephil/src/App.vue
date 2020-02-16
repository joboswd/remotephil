<template>
  <div id="app">
    <div class="flex">
      <div class="w-1/5">
        <SideMenu />
      </div>
      <div class="w-4/5">

      </div>
    </div>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SideMenu from './components/SideMenu.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SideMenu
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
