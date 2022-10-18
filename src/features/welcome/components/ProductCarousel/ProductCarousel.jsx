import { Arrow, Container, PopularWrapper, ReviewSlider, sliderSettings } from './ProductCarouselStyles'
import ProductCard from '../../../../components/ProductCard/ProductCard'
import { Heading, Subtitle } from '../../../../styles/globalStyles'
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import { publicRequest } from '../../../../redux/api'
const ProductCarousel = ({ title, subtitle }) => {
  const iconStyles = { color: 'var(--text-2-color)', fontSize: '26px' }

  const [sliderRef, setSliderRef] = useState(null)

  const [productList, setproductList] = useState([])

  useEffect(() => {
    publicRequest.get('/product/get-newest-products').then((resp) => {
      setproductList(resp.data.newestProducts)
    })
  }, [])

  return (
    <Container>
      <PopularWrapper>
      <Arrow direction='left'>
        <KeyboardArrowLeftOutlined style={iconStyles} onClick={sliderRef?.slickPrev}/>
      </Arrow>
        <Heading inverse mb='1.5rem' >{title}</Heading>
        <Subtitle mb='1.5rem'>{subtitle}</Subtitle>
        <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {productList.map((product) => (
          <ProductCard key={product.id_product} {...product} />
        ))}
        </ReviewSlider>
        <Arrow direction='right'>
        <KeyboardArrowRightOutlined style={iconStyles} onClick={sliderRef?.slickNext} />
      </Arrow>
      </PopularWrapper>
    </Container>
  )
}

export default ProductCarousel
