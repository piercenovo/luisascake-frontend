import { Link } from 'react-router-dom'
import { Container, Image, ImgContainer, InfoContainer, Span, Title } from './CardOfferStyles'

const CardOffer = ({ title, subtitle, picture, link, bg, bghover }) => {
  return (
    <>
    <Link to={link}>
    <Container bg={bg} bghover={bghover} >
      <ImgContainer>
        <Image src={picture} alt={title} />
      </ImgContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Span>{subtitle}</Span>
      </InfoContainer>
    </Container>
    </Link>
    </>
  )
}

export default CardOffer
