import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { Container, Hover, Icon, Image, ImgContainer, InfoContainer, Price, PriceContainer, Span, Title } from './ProductStyles'

const Product = ({ item }) => {
  const iconStyles = { color: 'var(--text-2-color)', fontSize: '22px' }
  return (
    <Container>
      <ImgContainer>
        <Image src={item.picture} />
      </ImgContainer>
      <InfoContainer>
        <Title>{item.name}</Title>
        <PriceContainer>
        <Span>Desde:</Span>
        <Price> {item.price}.00</Price>
        </PriceContainer>
      </InfoContainer>
      <Hover>
        <Icon>
          <ShoppingCartOutlined style={iconStyles} />
        </Icon>
        <Icon>
          <SearchOutlined style={iconStyles} />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined style={iconStyles} />
        </Icon>
      </Hover>
    </Container>
  )
}

export default Product
