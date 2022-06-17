import { offers } from '../../data/OffersData'
import { Heading, Subtitle } from '../../styles/globalStyles'
import CardOffer from '../CardOffer/CardOffer'
import { Container, OffersWrapper, Wrapper } from './OffersStyles'

const Offers = () => {
  return (
    <Container>
      <OffersWrapper>
        <Heading inverse mb='1.5rem' >Lo que te ofrecemos</Heading>
        <Subtitle mb='1.5rem'>En Luisa's Cake te brindamos las siguientes categorías</Subtitle>
        <Wrapper>
        {offers.map((offer) => (
          <CardOffer key={offer.id} {...offer} />
        ))}
        </Wrapper>
      </OffersWrapper>
    </Container>
  )
}

export default Offers
