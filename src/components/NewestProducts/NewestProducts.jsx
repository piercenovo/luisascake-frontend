import { Container, NewestWrapper, Wrapper } from './NewestProductsStyles'
import { popularProducts } from '../../data/ProductsData'
import CardProduct from '../CardProduct/CardProduct'
import { Heading, Subtitle } from '../../styles/globalStyles'
const NewestProducts = () => {
  return (
      <Container>
      <NewestWrapper>
        <Heading inverse mb='1.5rem' >Lo más nuevo</Heading>
        <Subtitle mb='1.5rem'>Nuevos productos de Luisa's Cake</Subtitle>
        <Wrapper>
        {popularProducts.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
        </Wrapper>
      </NewestWrapper>
      </Container>
  )
}

export default NewestProducts
