<template>
    <div class="summary-header">
        <div class="flex p-6">
            <div class="w-4/6">

            </div>
            <div class="w-2/6">
                <SummaryHeaderRight />
            </div>
        </div>
    </div>
</template>

<script>
import SummaryHeaderRight from '@/components/SummaryHeaderRight.vue'

export default {
    name: 'SummaryHeader',
    components: {
        SummaryHeaderRight
    }
}
</script>