import { ArrowForward, ArrowForwardIos, FavoriteBorderOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { Button } from '../../styles/globalStyles'
import { Container, Discount, Hover, Icon, Image, ImgContainer, InfoContainer, LinkCard, Price, PriceContainer, Span, DiscountSpan, Title, PriceDisc, PreviousPrice } from './ProductCardStyles'

const ProductCard = ({ picture, name_product, price, link_product, discount, discount_value }) => {
  const iconStyles = { color: 'var(--text-2-color)', fontSize: '2.6rem' }

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  const priceDiscount = price * discount_value / 100
  return (
    <Container>
      {discount === 1
        ? <Discount>
        <DiscountSpan>- {discount_value}%</DiscountSpan>
      </Discount>
        : ''}
      <ImgContainer>
        <Image src={'http://localhost:2207/' + picture} alt={name_product} />
      </ImgContainer>
      <InfoContainer>
        <Title>{name_product}</Title>
        <PriceContainer>
        <Span>Desde:</Span>
        {discount === 1
          ? <>
              <PriceDisc>S/{price - priceDiscount}.00</PriceDisc>
              <PreviousPrice>S/{price}.00</PreviousPrice>
            </>
          : <Price>S/{price - priceDiscount}.00</Price>
        }
        </PriceContainer>
      </InfoContainer>
      <Hover>
        <LinkCard to={`/producto/${link_product}`}>
        <Button
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        primary='true'
        bordeOut='true'
        >
        Ver más {hover ? <ArrowForward /> : <ArrowForwardIos /> }
        </Button>
        </LinkCard>
        <Icon>
          <FavoriteBorderOutlined style={iconStyles} />
        </Icon>
      </Hover>
    </Container>
  )
}

export default ProductCard
