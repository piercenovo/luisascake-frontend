import { Container, Desc, Image, ImgContainer, InfoContainer, InfoLink, Input, SearchContainer, Title, Wrapper } from './Error404Styles'
import Error404Svg from '../../../assets/svg/404.svg'
// import { Search } from '@material-ui/icons'

const Error404 = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={Error404Svg} alt='Error 404' />
        </ImgContainer>
        <InfoContainer>
          <Title>Error 404</Title>
          <Desc>La página que estas buscando no está disponible.</Desc>
          <Desc>Intenta realizando otra busqueda o
            <InfoLink to={'/tienda'}> volver a la tienda</InfoLink>
          </Desc>
          <SearchContainer>
            <Input placeholder='¿Qué estás buscando?'/>
            {/* <Search style={{ fontSize: 16, color: 'var(--accent-color-2)' }} /> */}
        </SearchContainer>
        </InfoContainer>
      </Wrapper >
    </Container>
  )
}

export default Error404
