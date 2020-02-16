<template>
    <div class="summary-header__right">
        <div class="profit-summary">
            <div class="flex-row bg-bggray text-secondary-gray py-1">
                Aug 13, 2018 - Aug 13, 2019 (<u>Edit</u>)
            </div>
            <div class="flex">
                <div class="flex-1 py-2">
                    <h4 class="text-3.5 text-secondary-gray mb-3px">Total spend</h4>
                    <h3 class="font-700 text-primary-dark">$1,294,000.00</h3>
                </div>
                <div class="flex-1 py-2">
                    <h4 class="text-3.5 text-secondary-gray mb-3px">Margin $</h4>
                    <h3 class="font-700 text-primary-dark">$107,500.00</h3>
                </div>
                <div class="flex-1 py-2">
                    <h4 class="text-3.5 text-secondary-gray mb-3px">Margin %</h4>
                    <div class="margin-percent text-white w-50% m-auto py-1 relative">
                        <span class="relative right-2">39.76%</span>
                        <div class="smiley-container absolute right-0 top-0 py-1">
                            <AppIcon class="icon-smiley !text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppIcon from '@/elements/AppIcon.vue'

export default {
    name: 'SummaryHeaderRight',
    components: {
        AppIcon
    }
}
</script>

<style lang="scss" scoped>
    .profit-summary {
        border: 1px solid #e4e4e4;
        border-radius: 6px;

        .margin-percent {
            background: #28a745;
            border-radius: 6px;

            .smiley-container {
                background: #218939;
                border-top-right-radius: 6px;
                border-bottom-right-radius: 6px;
            }
        }

        .flex-1 {
            border-top: 1px solid #e4e4e4;
            border-right: 1px solid #e4e4e4;

            &:last-of-type {
                border-right: 0;
            }
        }
    }

    
</style>