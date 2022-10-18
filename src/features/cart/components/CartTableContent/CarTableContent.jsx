import { Add, Remove, Clear } from '@material-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TbodyWrapper, TbodyRow, ProductDetail, ProductPrice, ProductQuantity, ProductSubTotal, ProductRemove, ProductAmount, ImgContainer, Image, DetailContainer, Title, OptionsWrapper, OptionTitle, OptionDescription, OptionContent, ProductContent } from './CartTableContentStyles'

const CartTableContent = ({ name_product, price, picture, quantity, cake_value, padding_value, link_product }) => {
  
  return (
    <TbodyWrapper>
      <TbodyRow>
        <ProductDetail>
          <ImgContainer>
            <Image src={'http://localhost:2207/' + picture} alt={name_product} />
          </ImgContainer>
          <DetailContainer>
            <Link to={`/producto/${link_product}`}>
            <Title>{name_product}</Title>
            </Link>
            <OptionsWrapper>
              <OptionContent>
                <OptionTitle>Opciones de Cake: </OptionTitle>
                <OptionDescription>{cake_value}</OptionDescription>
              </OptionContent>
              <OptionContent>
                <OptionTitle>Opciones de Relleno: </OptionTitle>
                <OptionDescription>{padding_value}</OptionDescription>
              </OptionContent>
            </OptionsWrapper>
          </DetailContainer>
        </ProductDetail>
        <ProductContent>
        <ProductPrice>
          S/. {price}.00
        </ProductPrice>
        <ProductQuantity>
          <Remove onClick={() => handleQuantity('dec')} />
             <ProductAmount>{quantity}</ProductAmount>
          <Add onClick={() => handleQuantity('inc')} />
        </ProductQuantity>
        <ProductSubTotal>
          S/. {price * quantity}.00
        </ProductSubTotal>
        <ProductRemove>
          <Clear style={ { fontSize: '1.7rem' } } />
        </ProductRemove>
        </ProductContent>
      </TbodyRow>
    </TbodyWrapper>
  )
}

export default CartTableContent
