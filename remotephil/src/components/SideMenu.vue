<template>
    <div class="side-menu">
        test
        <div
            v-for="(item, index) in sideMenuData" 
            :key="index"
        >
            <h3>{{ item.name }}</h3>
        </div>
    </div>
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