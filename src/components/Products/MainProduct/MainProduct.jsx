import { products } from '../../../data/ProductsData'
import CardProduct from '../../CardProduct/CardProduct'
import { Container, Main, FilterContainer, Filter, FilterText, Select, Option } from './MainProductStyles'

const MainProduct = () => {
  return (
    <Main>
      <FilterContainer>
        <Filter>
          <FilterText>Mostrando 1 - 8 de 35 resultados</FilterText>
        </Filter>
        <Filter>
          <Select>
            <Option>Orden predeterminado</Option>
            <Option>Orden por popularidad</Option>
            <Option>Orden por los últimos</Option>
            <Option>Orden por precio: Bajo a Alto</Option>
            <Option>Orden por precio: Alto a Bajo</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Container>
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </Container>
    </Main>
  )
}

export default MainProduct
