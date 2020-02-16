
<template>
  <span
    class="text-4 text-primary-dark p-1"
    @click="emitClick"
  />
</template>

<script>
export default {
  name: 'AppIcon',
  props: {
    icon: {
      type: String,
      default: null
    }
  },
  methods: {
    emitClick() {
      this.$emit('click')
    }
  }
}
// ALL OTHER MODULES SHOULD NOT HAVE A STYLE TAG - THIS IS ONLY BECAUSE THE EXTERNAL ICONS ARE NOT PART OF TAILWIND CSS
// This is to fix master branch
</script>

<style>
@font-face {
  font-family: 'icomoon';
  src:  url('../assets/fonts/icomoon.eot');
  src:  url('../assets/fonts/icomoon.eot') format('embedded-opentype'),
    url('../assets/fonts/icomoon.ttf') format('truetype'),
    url('../assets/fonts/icomoon.woff') format('woff'),
    url('../assets/fonts/icomoon.svg') format('svg');
}



[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-quick_switch:before {
  content: "\e900";
}

.icon-smart:before {
  content: "\e901";
}

.icon-supplier:before {
  content: "\e902";
}

.icon-expand_less:before {
  content: "\e903";
}

.icon-expand_more:before {
  content: "\e904";
}

.icon-cancel:before {
  content: "\e905";
}

.icon-notifications:before {
  content: "\e906";
}

.icon-star:before {
  content: "\e907";
}

.icon-products:before {
  content: "\e908";
}

.icon-by_products:before {
  content: "\e909";
}

.icon-smiley:before {
  content: "\e90a";
}

.icon-shopping_cost:before {
  content: "\e90b";
}

.icon-info-large:before {
  content: "\e90c";
}

.icon-info-calendar:before {
  content: "\e90d";
}

.icon-drive:before {
  content: "\e963";
}

.icon-bubble:before {
  content: "\e96b";
}

.icon-eye:before {
  content: "\e96ce";
}

.icon-arrow-left2:before {
  content: "\ea40";
}
</style>
