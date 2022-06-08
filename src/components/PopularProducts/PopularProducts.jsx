import { Container } from './PopularProductsStyles'
import { popularProducts } from '../../data/ProductsData'
import Product from '../Product/Product'
import { ContainerGlobal, Heading, Subtitle } from '../../styles/globalStyles'
const PopularProducts = () => {
  return (
    <ContainerGlobal>
      <Heading inverse mb='1.2rem' >Los productos más vendidos</Heading>
      <Subtitle mb='.8rem'>Lo preferido por nuestros clientes</Subtitle>
      <Container>
      {popularProducts.map((product) => (
        <Product item={product} key={product.id} />
      ))}
      </Container>
    </ContainerGlobal>
  )
}

export default PopularProducts
