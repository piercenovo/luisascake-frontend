import Banner from '../components/Banner/Banner'
import Offer from '../components/Offers/Offers'
import PopularProducts from '../components/CarouselProducts/CarouselProducts'
import Slider from '../components/Slider/Slider'
import { newestProducts, popularProducts } from '../data/ProductsData'
import { sliders } from '../data/SlidersData'
import { bannerObjOne, bannerObjTwo } from '../data/BannerData'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'

const Home = () => {
  return (
    <>
      <Slider sliders={sliders} />
      <Offer />
      <PopularProducts
      products={popularProducts}
      title='Lo más pedido'
      subtitle='Lo preferido por nuestros clientes'
      />
      <Banner {...bannerObjOne} />
      <PopularProducts
      title='Lo más nuevo'
      subtitle="Nuevos productos de Luisa's Cake"
      products={newestProducts} />
      <Banner {...bannerObjTwo} />
      <WhyChooseUs />
    </>

  )
}

export default Home
