<template>
    <div class="s-loading">
        <div class="l-container">
            {{ progress }}
        </div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    data() {
        return {
            progress: 0,
        }
    },
    computed: {
        ...mapGetters(['isWindowOnLoad'])
    },
    watch: {
        isWindowOnLoad() {
            console.log('isWindowOnLoad')
            this.handleLoadingEnd()
        }
    },
    mounted() {
        this.progressPlay()
    },
    methods: {
        /**
         * 開始 loading 動畫
         */
        progressPlay() {
            let timer = setInterval(() => {
                if(this.progress === 99) {
                    clearInterval(timer)
                } else {
                    this.progress++
                }
            }, 10)
        },

        /**
         * 處理 loading 的結束動畫
         */
        async handleLoadingEnd(el, done) {
            await this.checkProgressEnd()
                  this.updateProgressTo100()
            await this.animate()
                  this.loadingIsFinish()
        },
        checkProgressEnd() {
            return new Promise(resolve => {
                const check = () => {
                    if (this.progress === 99) {
                        resolve()
                        return true
                    } else {
                        setTimeout(check, 1000)
                        return false
                    }
                }
                check()
            })
        },
        updateProgressTo100() {
            this.progress = 100
        },
        animate() {
            console.log('animate')
            return new Promise(resolve => {
                setTimeout(resolve, 1000)
            })
        },
        ...mapMutations({
            loadingIsFinish: 'windowInfo/LOADING_IS_FINISH'
        })
    }
}
</script>

<style lang="sass" scoped>
@import './style'
</style>
