import { Container } from './PopularProductsStyles'
import { popularProducts } from '../../data/ProductsData'
import CardProduct from '../CardProduct/CardProduct'
import { ContainerGlobal, Heading, Subtitle } from '../../styles/globalStyles'
const PopularProducts = () => {
  return (
    <ContainerGlobal>
      <Heading inverse mb='1.2rem' >Los productos más vendidos</Heading>
      <Subtitle mb='.8rem'>Lo preferido por nuestros clientes</Subtitle>
      <Container>
      {popularProducts.map((product) => (
        <CardProduct item={product} key={product.id} />
      ))}
      </Container>
    </ContainerGlobal>
  )
}

export default PopularProducts
