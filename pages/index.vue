<template>
    <div class="l-container">
        <div class="l-context-container" :class="isWindowOnLoad ? 'is-load' : ''">
        </div>
        <Loading v-if="!isLoadingFinish"/>
    </div>
</template>

<script>
import Loading from '~/blocks/Loading/index.vue'
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
    name: 'IndexPage',
    components: {
        Loading
    },
    computed: {
        ...mapGetters([
            'isWindowOnLoad',
            'isLoadingFinish'
        ])
    },
    mounted() {
        /**
         * @desc 獲取募資數據
         */
        this.syncBackerData()

        /**
         * @desc 獲取 window width
         */
        this.getWindowWidth()
        window.addEventListener('resize', this.getWindowWidth)

        /**
         * @desc 頁面 onload
         */
        window.addEventListener('load', this.handleWindowOnload)
    },
    methods: {
        ...mapMutations({
            getWindowWidth: 'windowInfo/UPDATE_WIDTH',
            handleWindowOnload: 'windowInfo/WINDOW_IS_ONLOAD'
        }),
        ...mapActions({
            syncBackerData: 'backer/syncBackerData'
        })
    }
}
</script>
<style scoped lang="sass">
.l-context-container
    opacity: 0
    position: fixed
    height: 300vh
    &.is-load
        opacity: 1
        position: static

</style>
