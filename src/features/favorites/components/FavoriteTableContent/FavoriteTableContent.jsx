import { Clear } from '@material-ui/icons'
import { TbodyWrapper, TbodyRow, ProductDetail, ProductPrice, ProductDate, ProductRemove, ImgContainer, Image, DetailContainer, Title, ProductContent } from './FavoriteTableContentStyles'

const FavoriteTableContent = () => {
  return (
    <TbodyWrapper>
      <TbodyRow>
        <ProductDetail>
          <ImgContainer>
            <Image src='http://localhost:2207/productImage-1656366960299.png' alt='Torta Unicornio' />
          </ImgContainer>
          <DetailContainer>
            <Title>Torta Unicornio</Title>
          </DetailContainer>
        </ProductDetail>
        <ProductContent>
          <ProductPrice>
            S/. 170.00
          </ProductPrice>
          <ProductDate>
            15-06-2022
          </ProductDate>
          <ProductRemove>
            <Clear style={ { fontSize: '1.7rem' } } />
          </ProductRemove>
        </ProductContent>
      </TbodyRow>
    </TbodyWrapper>
  )
}

export default FavoriteTableContent
