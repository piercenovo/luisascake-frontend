// import { useState, useEffect } from 'react'
// import { publicRequest } from '../../../redux/api'
import EmptyView from '../../../../components/EmptyView/EmptyView'
import { Main, FilterContainer, Filter, FilterText, Select, Option } from './ProductContentStyles'
import Products from '../../../../features/store/components/ProductList/ProductList'

const ProductContent = ({ products, handleSort }) => {
  return (
    <Main>
      <FilterContainer>
        <Filter>
          <FilterText>Mostrando 1 - 8 de 35 resultados</FilterText>
        </Filter>
        <Filter>
          <Select name='order' onChange={handleSort}>
            <Option value='default'>Orden predeterminado</Option>
            <Option value='popular'>Orden por popularidad</Option>
            <Option value='newest'>Orden por los últimos</Option>
            <Option value='asc'>Orden por precio: Alto a Bajo</Option>
            <Option value='desc'>Orden por precio: Bajo a Alto</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {products.length ? <Products products={products} /> : <EmptyView /> }
    </Main>
  )
}

export default ProductContent
