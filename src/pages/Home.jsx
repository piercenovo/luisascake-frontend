import PopularProducts from '../components/PopularProducts/PopularProducts'
import Slider from '../components/Slider/Slider'
import { sliders } from '../data/SlidersData'

const Home = () => {
  return (
    <>
      <Slider sliders={sliders} />
      <PopularProducts />
    </>

  )
}

export default Home
