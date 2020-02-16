<template>
    <div class="summary-header">
        <div class="flex p-6">
            <div class="w-4/6">
                <SummaryHeaderLeft />
            </div>
            <div class="w-2/6">
                <SummaryHeaderRight />
            </div>
        </div>
    </div>
</template>

<script>
import SummaryHeaderLeft from '@/components/SummaryHeaderLeft.vue'
import SummaryHeaderRight from '@/components/SummaryHeaderRight.vue'

export default {
    name: 'SummaryHeader',
    components: {
        SummaryHeaderLeft,
        SummaryHeaderRight
    }
}
</script>