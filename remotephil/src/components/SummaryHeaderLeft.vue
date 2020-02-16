<template>
    <div class="summary-header__left">
        <div class="customer-summary">
            <h2 class="inline text-5">Pro Industrial</h2>
            <AppIcon class="icon-info-large inline text-5" />
            <br/>
            <h2 class="inline">Ordering for Christmas Event</h2> <span class="text-secondary-gray">| Packform reference: </span> <span class="text-primary-violet">#474733</span>
        </div>
    </div>
</template>

<script>
import AppIcon from '@/elements/AppIcon.vue'

export default {
    name: 'SummaryLeft',
    components: {
        AppIcon
    }
}
</script>

<style lang="scss" scoped>
    h2 {
      &:first-of-type:before {
          color: #7d7d7d;
          content: 'Customer: ';
      }
      &:last-of-type:before {
          color: #7d7d7d;
          content: 'Customer PO: ';
      } 
    }
</style>