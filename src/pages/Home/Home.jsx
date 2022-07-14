import Banner from '../../components/Banner/Banner'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'
import Slider from '../../components/Slider/Slider'
import { sliders } from '../../data/SliderData'
import { bannerObjOne, bannerObjTwo } from '../../data/BannerData'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Offers from '../../components/Offers/Offers'

const Home = () => {
  return (
    <>
      <Slider sliders={sliders} />
      <Offers />
      <ProductCarousel
      title='Lo más pedido'
      subtitle='Lo preferido por nuestros clientes'
      />
      <Banner {...bannerObjOne} />
      <ProductCarousel
      title='Lo más nuevo'
      subtitle="Nuevos productos de Luisa's Cake"
      />
      <Banner {...bannerObjTwo} />
      <WhyChooseUs />
    </>

  )
}

export default Home
