import { offers } from '../../data/OfferData'
import { Heading, Subtitle } from '../../styles/globalStyles'
import OfferCard from '../OfferCard/OfferCard'
import { Container, OffersWrapper, Wrapper } from './OffersStyles'

const Offers = () => {
  return (
    <Container>
      <OffersWrapper>
        <Heading inverse mb='1.5rem' >Lo que te ofrecemos</Heading>
        <Subtitle mb='1.5rem'>En Luisa's Cake te brindamos las siguientes categorías</Subtitle>
        <Wrapper>
        {offers.map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
        </Wrapper>
      </OffersWrapper>
    </Container>
  )
}

export default Offers
