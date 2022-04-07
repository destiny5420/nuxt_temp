export default {
    mounted() {
        this.initAni()
    },
    methods: {
        initAni() {
            const anis = [
            ]
            this.initGsap(anis)
        },
        initGsap(doms = []) {
            doms.forEach(dom => {
                if (!dom) return void 0
                this.$ScrollTrigger.create({
                    trigger: dom,
                    start: "top 80%",
                    end: "bottom -10%",
                    onEnter: () => dom.classList.add('is-active'),
                    once: true
                })
            })
        }
    }
}
