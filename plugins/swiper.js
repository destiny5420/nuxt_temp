import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper.scss';

Swiper.use([ Pagination ])

export default  (_, inject) => inject('Swiper', Swiper)
