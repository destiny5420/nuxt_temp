export default {
    methods: {
        scrollToProgram() {
            this.$gsap.to(window, {
                scrollTo: '.s-sponsor-program',
                duration: 1
            })
        }
    }
}
