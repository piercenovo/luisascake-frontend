import ProductCard from '../../../../components/ProductCard/ProductCard'
import { Container } from './ProductListStyles'

const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map(product => (
        <ProductCard key={product.id_product} {...product} />
      ))}
    </Container>
  )
}

export default ProductList
