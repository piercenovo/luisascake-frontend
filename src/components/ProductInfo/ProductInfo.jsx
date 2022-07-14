import { Add, FavoriteBorderOutlined, Remove } from '@material-ui/icons'
import FacebookLogo from '../../assets/svg/facebook/Facebook'
import InstagramLogo from '../../assets/svg/instagram/Instagram'
import MessengerLogo from '../../assets/svg/messenger/Messenger'
import TwitterLogo from '../../assets/svg/twitter/Twitter'
import WhatsappLogo from '../../assets/svg/whatsapp/Whatsapp'
import { Button } from '../../styles/globalStyles'
import { Container, Desc, Image, ImgContainer, InfoContainer, Price, Title, Wrapper, Span, DescriptionWrapper, Description, FilterContainer, Filter, FilterTitle, FilterSize, FilterSizeOption, DescriptionContainer, AddContainer, AmountContainer, Amount, ShareContainer, TitleShare, IconsShare, IconLink, PriceDisc, PreviousPrice } from './ProductInfoStyles'

const ProductInfo = ({ picture, name_product, description, price, discount, discount_value, cake, cake_value, padding, padding_value, handleQuantity, quantity, handleClick, setCake, setPadding }) => {
  const priceDiscount = price * discount_value / 100
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={`http://localhost:2207/${picture}`} alt={name_product} />
        </ImgContainer>
        <InfoContainer>
          <DescriptionContainer>
            <DescriptionWrapper>
              <Description>
              <Title>{name_product}</Title>
              <Desc>{description}</Desc>
              </Description>
              <Description>
              <FavoriteBorderOutlined style={{ fontSize: '3.9rem', color: 'var(--accent-color-2)' }}/>
              </Description>
            </DescriptionWrapper>
            <DescriptionWrapper>
            </DescriptionWrapper>
            <DescriptionWrapper>
              <Span>Desde</Span>
              {discount === 1
                ? <>
                    <PriceDisc>S/{price - priceDiscount}.00</PriceDisc>
                    <PreviousPrice>S/{price}.00</PreviousPrice>
                  </>
                : <Price>S/{price - priceDiscount}.00</Price>
              }
            </DescriptionWrapper>
          </DescriptionContainer>
          <FilterContainer>
            {cake === 1
              ? <Filter>
              <FilterTitle>Opciones de cake</FilterTitle>
              <FilterSize onChange={(e) => setCake(e.target.value)}>
                <FilterSizeOption>Elija una opción</FilterSizeOption>
                {cake_value?.map((item) => (
                <FilterSizeOption key={item}>{item}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
              : <></>}
            {padding === 1
              ? <Filter>
            <FilterTitle>Opciones de relleno</FilterTitle>
            <FilterSize onChange={(e) => setPadding(e.target.value)}>
              <FilterSizeOption>Elija una opción</FilterSizeOption>
              {padding_value?.map((item) => (
              <FilterSizeOption key={item}>{item}</FilterSizeOption>
              ))}
            </FilterSize>
          </Filter>
              : <></>}
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button primary='true' onClick={handleClick} >Añadir al Carrito</Button>
          </AddContainer>
          <ShareContainer>
            <TitleShare>Compartir en:</TitleShare>
            <IconsShare>
              <IconLink href='https://web.facebook.com/PateleriaLuisasCake' target='_blank'>
                <FacebookLogo color='var(--primary-color)' height='2.2rem' />
              </IconLink>
              <IconLink href='https://web.facebook.com/PateleriaLuisasCake' target='_blank'>
                <MessengerLogo color='var(--primary-color)' height='2.2rem' />
              </IconLink>
              <IconLink href='https://www.instagram.com/luisascake_' target='_blank'>
                <InstagramLogo color='var(--primary-color)' height='2.2rem' />
              </IconLink>
              <IconLink href='https://web.facebook.com/PateleriaLuisasCake' target='_blank'>
                <WhatsappLogo color='var(--primary-color)' height='2.2rem' />
              </IconLink>
              <IconLink href='https://web.facebook.com/PateleriaLuisasCake' target='_blank'>
                <TwitterLogo color='var(--primary-color)' height='2.2rem' />
              </IconLink>
            </IconsShare>
          </ShareContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default ProductInfo
