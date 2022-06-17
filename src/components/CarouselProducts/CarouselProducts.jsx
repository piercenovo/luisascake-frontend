import { Arrow, Container, PopularWrapper, ReviewSlider, sliderSettings } from './CarouselProductsStyles'
// import { sliderSettings } from '../../data/ProductsData'
import CardProduct from '../CardProduct/CardProduct'
import { Heading, Subtitle } from '../../styles/globalStyles'
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
const PopularProducts = ({ products, title, subtitle }) => {
  const iconStyles = { color: 'var(--text-2-color)', fontSize: '26px' }

  const [sliderRef, setSliderRef] = useState(null)

  return (
    <Container>
      <PopularWrapper>
      <Arrow direction='left'>
        <KeyboardArrowLeftOutlined style={iconStyles} onClick={sliderRef?.slickPrev}/>
      </Arrow>
        <Heading inverse mb='1.5rem' >{title}</Heading>
        <Subtitle mb='1.5rem'>{subtitle}</Subtitle>
        <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
        </ReviewSlider>
        <Arrow direction='right'>
        <KeyboardArrowRightOutlined style={iconStyles} onClick={sliderRef?.slickNext} />
      </Arrow>
      </PopularWrapper>
    </Container>
  )
}

export default PopularProducts
