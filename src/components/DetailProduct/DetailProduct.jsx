import { Add, Remove } from '@material-ui/icons'
import { Button } from '../../styles/globalStyles'
import { Container, Desc, Image, ImgContainer, InfoContainer, Price, Title, Wrapper, Span, Description, FilterContainer, Filter, FilterTitle, FilterSize, FilterSizeOption, DescriptionContainer, AddContainer, AmountContainer, Amount } from './DetailProductStyles'

const DetailProduct = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src='https://res.cloudinary.com/cloud-digital-asset/image/upload/v1654688069/torta-unicornio_p7bkgc.png' />
        </ImgContainer>
        <InfoContainer>
          <DescriptionContainer>
            <Description>
              <Title>Torta de Unicornio</Title>
              <Desc>Es una torta cubierta de chipas de colores, ¿Es un arcoiris?</Desc>
            </Description>
            <Description>
              <Span>Desde</Span>
              <Price>S/.150.00</Price>
            </Description>
          </DescriptionContainer>
          <FilterContainer>
            <Filter>
              <FilterTitle>Opciones de cake</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Elija una opción</FilterSizeOption>
                <FilterSizeOption>Chocolate</FilterSizeOption>
                <FilterSizeOption>Vainilla</FilterSizeOption>
                <FilterSizeOption>Zanahoria</FilterSizeOption>
                <FilterSizeOption>Plátano</FilterSizeOption>
              </FilterSize>
            </Filter>
            <Filter>
              <FilterTitle>Opciones de relleno</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Crema de maní</FilterSizeOption>
                <FilterSizeOption>Genache</FilterSizeOption>
                <FilterSizeOption>Manjar Blanco</FilterSizeOption>
                <FilterSizeOption>Fudge</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button inverse>Añadir al Carrito</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default DetailProduct
