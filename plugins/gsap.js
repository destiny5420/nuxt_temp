import gsap from "gsap"
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"


gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, ScrollTrigger)

export default (_, inject) => {
    inject('gsap', gsap)
    inject('MotionPathPlugin', MotionPathPlugin)
    inject('ScrollTrigger', ScrollTrigger)
}
