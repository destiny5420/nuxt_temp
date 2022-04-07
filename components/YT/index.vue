<template>
    <transition name="yt">
        <div class="c-model">
            <div class="c-bg" @click="$emit('closeYT')"></div>
            <div class="c-container">
                <client-only>
                    <youtube :video-id="src" class="c-yt" @ready="onYTReady"></youtube>
                </client-only>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        isYTShow: {
            type: Boolean,
            required: true
        }
    },
    watch: {
        isYTShow(isYTShow) {
            if (!this.ytPlayer) return void 0;
            if (isYTShow)
                this.ytPlayer.playVideo()
            else
                this.ytPlayer.stopVideo()
        }
    },
    data() {
        return {
            ytPlayer: null
        }
    },
    methods: {
        onYTReady(event) {
            this.ytPlayer = event.target
        }
    }
}
</script>
<style lang="sass" scoped>
@import './style'
</style>
