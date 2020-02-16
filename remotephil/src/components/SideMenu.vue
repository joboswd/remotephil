<template>
    <ul class="side-menu">
        test
        <li
            v-for="(item, index) in sideMenuData" 
            :key="index"
        >
            <h3 class="text-primary-gray">{{ item.name }}</h3>
            <ul 
                v-if="item.submenus"
                :key="index"
                :ref="'submenu-' + index"
            >
                <li
                    v-for="(submenu, subIndex) in item.submenus"
                    :key="subIndex"
                >
                    <h3 class="text-primary-gray">{{ submenu.name }}</h3>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
import MenusData from './data/MenusData.json'

export default {
    name: 'SideMenu',
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