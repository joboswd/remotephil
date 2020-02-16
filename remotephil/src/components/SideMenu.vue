<template>
    <ul class="side-menu">
        <li
            v-for="(item, index) in sideMenuData" 
            :key="index"
            class="flex-wrap relative pl-5 py-3"
        >
            <h3 
                :class="[index === 0 ? 'text-primary-dark' : 'text-primary-gray']"
            >
                {{ item.name }}
            </h3>
            <ul 
                v-if="item.submenus"
                :key="index"
                :ref="'submenu-' + index"
                class="pl-5 pt-3"
            >
                <li
                    v-for="(submenu, subIndex) in item.submenus"
                    :key="subIndex"
                    class="py-3"
                >
                    <h3
                        :class="[subIndex === 0 ? 'text-primary-dark' : 'text-primary-gray']"
                    >
                        {{ submenu.name }}
                    </h3>
                </li>
            </ul>
            <AppIcon class="icon-expand_more absolute right-0 top-3" />
        </li>
    </ul>
</template>

<script>
import MenusData from './data/MenusData.json'
import AppIcon from '@/elements/AppIcon.vue'

export default {
    name: 'SideMenu',
    components: {
        AppIcon
    },
    data() {
        return {
            sideMenuData: MenusData.data
        }
    },
    methods: {
        testData() {
            if (this.sideMenuData) {
                console.log('meron pre')
            }
        }
    },
    beforeMount() {
        this.testData()
    }
}
</script>