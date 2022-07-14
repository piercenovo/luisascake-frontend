import {
  Container,
  Wrapper,
  Top,
  CardTableContainer,
  TheadWrapper,
  TheadColumn,
  TheadRow
} from './FavoriteContentStyles'

import EmptyTable from '../EmptyTable/EmptyTable'
import FavoriteBottomContent from './FavoriteBottomContent/FavoriteBottomContent'

const FavoriteTable = () => {
  // const favorite = useSelector(state => state.favorite)

  return (
    <Container>
      <Wrapper>
        <Top>
          <CardTableContainer>
            <TheadWrapper>
              <TheadRow>
                <TheadColumn>Producto</TheadColumn>
                <TheadColumn>Precio</TheadColumn>
                <TheadColumn>Fecha</TheadColumn>
                <TheadColumn>&nbsp;</TheadColumn>
              </TheadRow>
            </TheadWrapper>
            {/* {favorite > 0
                ? favorite.products.map(product => (
                <FavoriteTableContent key={product.id_product} {...product} />
                ))
                : <EmptyFavoriteTable />
              } */}
            {/* <FavoriteTableContent /> */}
            <EmptyTable description={'a la lista de favoritos'} />
          </CardTableContainer>
        </Top>
        <FavoriteBottomContent />
      </Wrapper>
    </Container>
  )
}

export default FavoriteTable
