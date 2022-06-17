import { Container, Image, ImgContainer, InfoContainer, Parr, Title, Welcome, Wrapper } from './HistorySectionStyles'

const HistorySection = () => {
  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Title>¿Quiénes somos?</Title>
          <Parr>Luisa’s Cake es el espacio donde la creatividad y el paladar se juntan para idear los pasteles más deliciosos.</Parr>
          <Parr>Nuestra pastelería nace por el sueño de nuestra creadora Wendy Ansaby Cáceres Díaz con la idea de poder brindar a nuestros clientes en cada mordida una satisfacción grata a su paladar y esto debido a que los sabores que brindamos son suaves y dulces.</Parr>
          <Parr>La empresa se enorgullece del excelente servicio que brindamos, nuestro enfoque de garantía de calidad, la frescura y selección exclusiva de ingredientes, como también de nuestra atención a todos los detalles del producto final.</Parr>
          <Welcome>¡Bienvenidos a todos!</Welcome>
          <Welcome>Equipo Luisa’s Cake</Welcome>
        </InfoContainer>
        <ImgContainer>
          <Image src='https://res.cloudinary.com/cloud-digital-asset/image/upload/v1655264596/about-1_pzrud5.png' alt='Historia' />
        </ImgContainer>
      </Wrapper >
    </Container>
  )
}

export default HistorySection
